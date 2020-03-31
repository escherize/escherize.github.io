(ns new-root.leds
  (:require [markdown-to-hiccup.core :as m]
            [reagent.core :as r]))

(defn board
  ([] [board {}])
  ([on?]
   (into [:div {:style {:width (* 15 15)
                        :margin "auto"}}]
         (for [y (range 10)]
           (into [:div {:style {:margin 0 :line-height 0}}]
                 (for [x (range 15)]
                   [:div {:style
                          (merge
                           {:display :inline-block
                            :width 13
                            :height 13
                            :border "1px solid black"}
                           (when (on? [x y])
                             {:background-color (on? [x y])}))}]))))))

(defn board-1 []
  (let [*board (r/atom {})]
    (fn []
      [:div {:style {:margin "50px"
                     :padding "10px"
                     :border "1px solid grey"
                     :display "flex"
                     :flex-direction "row"}}

       [:div {:style {:width 200}}
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [0 9] "red")}
         "set(0, red)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [0 0] "pink")}
         "set(149, pink)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [13 9] "orange")}
         "set(13, orange)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [14 9] "blue")}
         "set(14, blue)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [14 8] "green")}
         "set(15, green)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [13 8] "red")}
         "set(16, red)"]
        [:button {:style {:margin 2}
                  :on-click #(swap! *board assoc [10 8] "#ff00ff")}
         "set(19, #ff00ff)"]
        [:button {:style {:margin 2}
                  :on-click #(reset! *board {})}
         "clear"]]
       [:div {:style {:align-self "center" :width 300}}
        [board @*board]]])))

(defn md [content] (->> content (m/md->hiccup) (m/component)))

(defn view []
  [:div.container {:style {:max-width "800px"
                           :margin-top "40px"}}
   [:div {:style {:margin "50px"}}
    [board
     (zipmap [[0 0]               [4 0]
              [0 1]
              [0 2] [1 2] [2 2]   [4 2]
              [0 3]       [2 3]   [4 3]
              [0 4]       [2 4]   [4 4]
              [0 5]       [2 5]   [4 5]  [6 5]]
             (repeat "red"))]
    [:div {:style {:height 30}}]
    (board (zipmap
            (->> (for [y (range 0 10)]
                   (for [x (if (odd? y)
                             (range 0 15)
                             (reverse (range 0 15)))]
                     [x y]))
                 flatten
                 (partition 2))
            (map #(str "rgb(" (- 150 %) "," % "," % ")")
                 (range 200 0 -4))))
    ]
   (md "
  # Wifi LED Display

  I made a wifi-connected LED display out of things laying around the house. Due to coronavirus I needed something to do, and put together a project with a [led strip light](https://en.wikipedia.org/wiki/LED_strip_light) and a Raspberry Pi.

  The first application for it fetches the weather and displays it, like this:

  ![weather app](public/img/led_images/IMG_0531.jpeg)

  # Physical Construction

  We needed a board to mount the leds to (and subsequently hang on the wall). One of the drawers in our [Ikea Alex](https://www.ikea.com/us/en/p/alex-drawer-unit-on-casters-white-40196241/) broke, and the white, thin, and sturdy bottom of the drawer made a great foundation!

  ### Layout and hot gluing

  I had 150 leds, and wanted to shoot for an aspect ratio near the golden ratio: `1.61`. So I wrote a script to figure out what a good width and height would be. I ended up on 15x10. When I told my wife there were 150 leds, she immediately said 15x10. Heh.

  So, I cut the strip into 10 15-led long strips, and started gluing them to the board.

  To get them straight I used a straight edge and measured to center the leds on the board. But I accidently marked out 11 rows, so it ended up not being centered.

  A few more mistakes were made. Since theyre diodes, of course there's a direction, and I glued on one or two strips the wrong direction.

### Soldering

  Soldering went off without a hitch, I still have my old [TS100 soldering iron](https://www.amazon.com/UY-CHAN-Programmable-Pocket-size-Acceleration/dp/B01MDTO6X7) that I used to [build racing drones](https://www.youtube.com/watch?v=L9Q1mrHi-iM) with, and soldered the strips in a ladder sort of pattern.

  Once finished it looked like this:

  ![leds](public/img/led_images/IMG_0121.jpeg \"leds\")

  ### LED Diffusers

  The lights were a little blinding, so I 3d printed 175 led diffusers (150 of which were good) and hot glued them onto the board, over the leds.

Here they are on the printer, about halfway printed:

![leds](public/img/led_images/IMG_0520.jpeg)

A pile of them:

![leds](public/img/led_images/IMG_0522.jpeg)

And partly glued onto the board:

![leds](public/img/led_images/IMG_0523.jpeg)

   ## Coding

  Some software was needed to get this thing working. I found a python library that interacts with the strip.

")
   [board-1]
   (md
    "
### Python
Indexing into this was a challenge. I figured out the following function to get `set(x,y,color)` working:

```
def idx(w,h,x,y):
  t = w * h - 1 - y * w
  # Since odd rows decrease from left to right,
  # and even rows increase from left to right,
  # we need to handle x differently based on the row.
  if y % 2 == 1:
    t -= w - x - 1
  else:
    t -= x
  return t

idx(10,15,0,0) => 149
idx(10,15,0,9) => 0
```

 So, this is the interface for using the light strip. Notice how as the led we set increases the values snake their way up the board.

I used some python library that lets you set values on the strip by their index, and converted from a cartesian coordinate into the snakey index using that `idx` function above.

### Font

I needed an awesome font, and found [434.ttf](public/434.ttf). It's the alternative font for [tic-80](https://tic.computer/), and is nice and small.

### setting up fonts

The font file looks something like this

```
fonts = \"\"\"
#a
----
-xxx
x--x
x--x
-xxx
#b
x---
xxx-
x--x
x--x
xxx-
#c
---
-xx
x--
x--
-xx
\"\"\"

```

Thanks to my wife Sarah for typing these out. :)

When writing a character, we scan for it in fonts, then grab its shape and turn on the character's coordinates.

```
def lines():
    lines = []
    for line in fonts.splitlines():
        lines.append(line)
    return lines

lines = lines()

def char_map(char):
    char = char.lower()
    r = []
    i = 0
    while not lines[i].startswith('#'+char):
        i += 1
    i += 1
    while not lines[i].startswith('#'):
        r.append(lines[i])
        i += 1
    return r

def char_coords(char):
    cm = char_map(char)
    width = len(cm[0])
    height = len(cm)
    coords = []
    for x in range(width):
        for y in range(height):
            if cm[y][x] == 'x':
                coords.append((x, y))
    return coords,width,height

def coords(x_offset,y_offset,string):
    r = []
    for c in string:
        result,width,_ = char_coords(c)
        for coord in result:
            r.append((coord[0]+x_offset, coord[1]+y_offset))
        x_offset += width
    return r

coords(0,0,\"abc\")
=> the pixels to turn on to display abc in the top left corner
```

### weather app

Using the [Open Weather API](https://openweathermap.org/api), I was able to send a request and get a response with the low, high, and current temp here in Austin. A little more pixel wrangling and we got:

 ![weather app](public/img/led_images/IMG_0531.jpeg)

")

   [:div {:style {:height "100px"}}]])
