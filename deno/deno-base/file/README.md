# deno 文件系统

## 读取文件

- 必要条件

```sh
deno run --allow-read xxx
```

### 异步读取`readTextFile`

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

### 同步读取`readTextFileSync`

- 参数

```typescript
export function readTextFileSync(path: string | URL): string;
```

- 示例

```typescript
const data = Deno.readTextFileSync("./test.json");
console.log(data);
```

> 下面的文件读取返回的是`Uint8Array`,需要解码

### 异步读取`readFile`

- 参数

```typescript
export function readFile(path: string | URL): Promise<Uint8Array>;
```

- 示例

```typescript
const decoder = new TextDecoder("utf-8");
const dataFile = await Deno.readFile("./test.json");
console.log(decoder.decode(dataFile));
```

### 同步读取`readFileSync`

- 参数

```typescript
export function readFileSync(path: string | URL): Uint8Array;
```

- 示例

```typescript
const decoder1 = new TextDecoder("utf-8");
const dataFileSync = Deno.readFileSync("./test.json");
console.log(decoder1.decode(dataFileSync));
```

## 写入文件

- 必要条件

```sh
deno run --allow-write xxx
```

### 异步写入

> 写入文件,文件不存在的时候则是创建文件

```typescript
export interface WriteFileOptions {
  /** 默认`false`. 如果设置 `true`, 会附加内容到文件,而不是覆盖以前的内容*/
  append?: boolean;
  /** 允许创建新文件存在指定的路径,默认是true*/
  create?: boolean;
  /** 权限. */
  mode?: number;
}
```

- 参数

```typescript
export function writeTextFile(
  path: string | URL,
  data: string,
  options?: WriteFileOptions
): Promise<void>;
```

- 示例

```typescript
await Deno.writeTextFile("./hello.text", "hello deno");
```

### 同步写入

- 参数

```typescript
export function writeTextFileSync(
  path: string | URL,
  data: string,
  options?: WriteFileOptions
): void;
```

- 示例

```typescript
Deno.writeTextFileSync("./hello.text", "hello deno!!!");
```

## 拷贝文件

- 必要条件

```sh
deno run --allow-write --allow-read xxx
```

### 异步拷贝

- 参数

```typescript
export function copyFile(
  fromPath: string | URL,
  toPath: string | URL
): Promise<void>;
```

- 示例

```typescript
await Deno.copyFile("./test.json", "copy_test.txt");
```

### 同步拷贝

```typescript
export function copyFileSync(
  fromPath: string | URL,
  toPath: string | URL
): void;
```

- 示例

```typescript
Deno.copyFileSync("./test.json", "copy_test.txt");
```
