# deno文件系统
## 读取文件
- 必要条件
```sh
deno run allow-read xxx
```
### 异步读取
- 参数
```typescript
export function readTextFile(path: string | URL): Promise<string>;
```
- 示例
```typescript
const data = await Deno.readTextFile("./test.json");
console.log(data);
```
> `data`就是文件内容
### 同步读取
- 参数
```typescript
  export function readFileSync(path: string | URL): Uint8Array;
```
- 示例
```typescript
const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("./test.json");
console.log(decoder.decode(data));
```
> `Deno.readFileSync` 返回的是一个`Uint8Array`,需要解码
## 写入文件
- 必要条件
```sh
deno run allow-write xxx
```
### 异步写入
> 写入文件,文件不存在的时候则是创建文件

- 参数
```typescript
export function writeTextFile(
    path: string | URL,
    data: string,
    options?: WriteFileOptions,
  ): Promise<void>;
```
- 示例
```typescript
await Deno.writeTextFile("./hello.text", "hello deno")
```
### 同步写入
- 参数
```typescript
  export function writeTextFileSync(
    path: string | URL,
    data: string,
    options?: WriteFileOptions,
  ): void;
```
- 示例
```typescript
Deno.writeTextFileSync("./hello.text", "hello deno!!!")
```