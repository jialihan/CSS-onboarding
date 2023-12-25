## Summary

### 0. UI result

<img src="./result.gif" width="360">

### 1. how to use VUE in HTML simply?

#### 1.1 use vue from CDN: [doc](https://vuejs.org/guide/quick-start#using-vue-from-cdn)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const message = ref("Hello vue!");
      return {
        message,
      };
    },
  }).mount("#app");
</script>
```

#### 1.2 Syntax

- `v-for` directive: base index is `1`, eg:`v-for="(item, index) in 50"`, result is: "1,2,3,...,49,50".
- bind the attribute: `:style`

### 2. use “var()” in css

mdn doc: [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

```html
<p style="'--delay':10s;font-size:16px;"></p>
<style>
  .app {
    animation: keyFramesName 0.5s var(--delay) infinite;
  }
</style>
```

### 3. 3D animation Props

- `transform-style: preserve-3d;`: enable 3D
- ` perspective: 1200px;`: , the z=0 plane and the user in order to give a 3D-positioned element some perspective.
- `rotateY`
- `translate3d(0, 0, 20px)`: “(tx, ty,tz)” - [doc](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d)

### 4. stroke the SVG

[Getting tricky with 'stroke-dasharray'](https://css-tricks.com/almanac/properties/s/stroke-dasharray/#aa-getting-tricky-with-stroke-dasharray)

That’s a trick that takes the stroke-dasharray of an element and animates it in conjunction with the stroke-dashoffset property.

```
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
```

#### 5. how to make text linear-gradient?

1. text `linear-gradient` - [doc](https://www.scaler.com/topics/text-gradient-css/)

```css
h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

2. how to add `animation` on `width` from left to right?
   Doc: [stackoverflow link](https://stackoverflow.com/questions/12686738/css-fade-left-to-right)

```html
<div class="text">
  There is some text here!
  <div class="fadingEffect"></div>
</div>
<style>
  .fadingEffect {
    position: absolute;
    top: 0;
    bottom: 0;
    /* Important prop to add the "mask" layer from right to left */
    right: 0;
    width: 100%;
    /* same background color to mock hiding the text */
    background: white;
    animation: showHide 5s ease-in alternate infinite;
  }
  @keyframes showHide {
    0% {
      width: 100%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 0%;
    }
  }
</style>
```
