### 1. understand the translate()

original postion is `top-left: (0, 0)`.

The below is `translate(-50%, -50%)`
![image](./center_move.png)

the below is `translate(-50%, -100%)`
![image](./center_bottom.png)

### 2. use "content"

```
// html
<div my_attribute="hello world!" />
// css
content: attr("my_attribute");
```

### 3. ::before & ::after selector
