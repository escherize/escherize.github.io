function _init()
   p1 = 0
    g_one = make_grid(3, 1)
   c_one = make_cursor(g_one,p1)

   p2 = 1
   g_two = make_grid(68, 1)
   c_two = make_cursor(g_two,p2)

   sparks = {}
end

function _update()
   r = rnd()
   if g_one.lose or g_two.lose then
      winner = 1
      if (g_one.lose) winner = 2
   else
      c_one:update()
      g_one:update(r)
      c_two:update()
      g_two:update(r)
   end
   update_sparks()
end

function _draw()
   cls(0)
   g_one:draw()
   g_two:draw()
   draw_cursor(c_one)
   draw_cursor(c_two)
   rect(0,0,63,127,7)
   rect(64,0,127,127,7)
   draw_sparks()
   if (winner == 1) then
      rectfill(8, 24, 120, 24+16, flr(rnd()*2)+8)
      print("player".. winner .." wins!", 40, 30, 7)
   end
   if (winner == 2) then
      rectfill(8, 24, 120, 24+16, flr(rnd()*2)+10)
      print("player".. winner .." wins!", 40, 30, 7)
   end

end
-->8
function i_to_xy(w, i)
   xy = {}
   xy.y =  flr(i / w)
   xy.x = i % w
   return xy
end

function xy_to_i(w,x,y)
   return y * w + x
end

function make_spark(x,y,color)
   spk = {}
   spk.x = x
   spk.y = y
   spk.color = color
   spk.duration = 10

   function spk:update()
      self.duration -= 2
   end

   function spk:draw()
      local len = 10-self.duration
      circ(x,y,10-self.duration,self.color)
      circ(x,y,10-self.duration,self.color)
      circ(x,y,self.duration-5,7)
   end

   add(sparks, spk)
   return spk
end

function update_sparks()
   for s in all(sparks) do
      s:update()
      if s.duration < 1 then
         del(sparks,s)
      end
   end
end

function draw_sparks()
   for s in all(sparks) do
      s:draw()
   end
end


function make_grid(xoffset, difficulty)
   local g = {}
   g.xoffset = xoffset
   g.difficulty = 1/difficulty * 300 -- number of seconds btwn rows
   g.row_counter = 0
   g.w = 7
   g.h = 14
   g.gd = {}
   g.offsets = {}
   g.lose = false

   function g:grid_to_pxl(x,y)
      pxls = {}
      pxls.x = self.xoffset + 8 * x
      pxls.y = 124 - 8 * (y+1)
      return pxls
   end

   function g:get(x,y)
      return self.gd[xy_to_i(self.w,x,y)]
   end

   function g:set(x,y,v,do_spark,spark_color)
      if x >= 0 and x < self.w and y >= 0 and y < self.h then
         if do_spark then
            sfx(0)
            spark_color = spark_color or 3
            pxls = self:grid_to_pxl(x,y)
            make_spark(pxls.x+4,pxls.y+4,spark_color+7)
         end
         self.gd[xy_to_i(g.w,x,y)] = v
      end
   end

   function g:get_offset(x,y)
      return self.offsets[xy_to_i(self.w,x,y)] or 99
   end

   function g:set_offset(x,y,v)
      self.offsets[xy_to_i(g.w,x,y)] = v
   end

   function g:shift_all_up()
      top = 112
      for i = top,0,-1 do
         local xy = i_to_xy(self.w,i)
         if xy.y != 0 then
            local below = g:get(xy.x,xy.y-1)
            g:set(xy.x,xy.y, below)
         end
      end
   end

   function g:add_row()
      g:shift_all_up()
      for x = 0,self.w do
         new_block = 1+flr(rnd()*7)
         g:set(x,0,new_block)
      end
   end

   function g:check_dead()
      for x=0,self.w-1 do
         if (self:get(x,self.h-1) > 0) and
            (self:get(x,self.h-2) > 0) and
         (self:get(x,self.h-3) > 0) then
            self.lose = true
         end
      end
   end

   function g:draw()
      -- new row timer
      rect(self.xoffset,2,
           self.xoffset + ((self.difficulty-(self.row_counter+1))/self.difficulty) * self.w*8,2,
           7)

      for i,v in pairs(self.gd) do
         xy = i_to_xy(self.w,i)
         pxls = self:grid_to_pxl(xy.x,xy.y)
         x = pxls.x
         y = pxls.y
         local offset = self.offsets[i] or 0
         if (self.lose) v += 16
         spr(v, x, y - offset)
      end
   end

   function g:check_drop(x,y,v)
      local below = self:get(x,y-1)
      local my_offset = self:get_offset(x,y) or 0
      if my_offset != 0 then
         g:set_offset(x,y,my_offset-1)
      end
      if v != 0 and below == 0 and my_offset == 0 then
         self:set(x,y-1,v)
         g:set_offset(x,y-1,8)
         self:set(x,y,0)
      end
   end

   function g:update(r)
      local to_kill = {}
      for i,v in pairs(self.gd) do
         xy = i_to_xy(self.w,i)
         x = xy.x
         y = xy.y
         self:check_drop(x,y,v)
         check_match(self,to_kill,x,y,v)
      end
      for xy in all(to_kill) do
         self:set(xy.x, xy.y, 0, true, xy.c)
      end
      self.row_counter += 1
      if self.row_counter == self.difficulty then
         self.row_counter = 0
         self:add_row()
      end
      self:check_dead()
   end

   for i = 0, 7*14-1 do
      g.gd[i] = 0
      g.offsets[i] = 0
   end
   for i=0,flr(difficulty * 2) do
      g:add_row()
   end
   return g
end

function check_match(g,to_kill,x,y,v)
   local u1 = g:get(x,y+1)
   local u2 = g:get(x,y+2)
   local o0 = g:get_offset(x,y)
   local uo1 = g:get_offset(x,y+1)
   local uo2 = g:get_offset(x,y+2)

   if o0+uo1+uo2 == 0 and v != 0 and v == u1 and u1 == u2 and y < g.h-2 then
      add(to_kill, {x=x, y=y, c=v})
      add(to_kill, {x=x, y=y+1, c=v})
      add(to_kill, {x=x, y=y+2, c=v})
   end

   local r1 = g:get(x+1,y)
   local r2 = g:get(x+2,y)
   local ro1 = g:get_offset(x+1,y)
   local ro2 = g:get_offset(x+2,y)
   if o0+ro1+ro2 == 0 and v != 0 and v == r1 and r1 == r2 and x < g.w-2 then
      add(to_kill, {x=x, y=y,c=v})
      add(to_kill, {x=x+1, y=y,c=v})
      add(to_kill, {x=x+2, y=y,c=v})
   end

   return kill
end

-->8
function make_cursor(g,player)
   local c = {}
   c.g = g
   c.player = player
   c.xmax = g.w
   c.ymax = g.h
   c.x = flr(g.w/2)
   c.y = flr(g.h/2 - g.h/3)

   function c:left()
      return self.g:get(c.x,c.y)
   end

   function c:right()
      return self.g:get(c.x+1,c.y)
   end

   function c:swap()
      a = self:left()
      b = self:right()
      self.g:set(c.x,c.y,b)
      self.g:set(c.x+1,c.y,a)
   end

   function c:update()
      if self.g.row_counter == 0 then
         self.y += 1
      end
      if not self.g.lose then
         if btnp(5,player) then
            self.g:add_row()
            if self.y < self.g.h-1 then
               self.y += 1
            end
         end
         if (btnp(🅾️,player)) self:swap()
         if btnp(➡️,player) and self.x<self.xmax-2 then
            self.x += 1
         end
         if btnp(⬅️,player) and self.x>0 then
            self.x -= 1
         end
         if btnp(⬆️,player) and self.y<self.ymax-1 then
            self.y += 1
         end
         if btnp(⬇️,player) and self.y>0 then
            self.y -= 1
         end
      end
   end
   return c
end

function draw_cursor(c)
   pxls = c.g:grid_to_pxl(c.x, c.y)
   x = pxls.x
   y = pxls.y
   sspr(0,96,19,9, x,y,19,9)

   local left_color = c.g:get(c.x,c.y)
   local right_color = c.g:get(c.x+1,c.y)

   rect(x+3, y+3, x+4, y+4, right_color+7)
   rect(x+3+8, y+3, x+4+8, y+4, left_color+7)
   -- rect(x, y, x+16, y+8, 7)
   -- line(x+9, y, x+9, y+8, 7)
   -- line(x+8, y, x+8, y+8, 7)
   -- line(x+7, y, x+7, y+8, 7)
end
