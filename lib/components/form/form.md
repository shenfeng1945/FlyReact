#### 异步验证

验证返回的errors格式为
```js
{username: ['太短',promise], password: ['必填', promise]}
```
为了得到每一项的promise返回值，需将errors返回值进行处理为:
```js
[
    ['username', '太短'],
    ['username', promise],
    ['password', '必填'],
    ['password', promise]
]
```
