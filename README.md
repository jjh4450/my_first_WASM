# My Fist WASM Project
This is a simple project to test WebAssembly (WASM) technology. This project is a simple "Hello World" written in Rust and compiled with WASM using wasm-pack.
## setup rust
### for linux(or wsl)
[install rust](https://jeje.work/rust-ubuntuwsl-rust)
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
...
source $HOME/.cargo/env
```
### for windows
https://www.rust-lang.org/tools/install
## setup wasm-pack
```bash
cargo install wasm-pack
```
## hello-wasm
This is the Rust project that will be compiled to WASM. It is a simple "Hello World" project.
command to create the project:
```bash
cd path/to/your/project
wasm-pack new hello-wasm
```
## build the project
```bash
wasm-pack build --target web
```
## test the project
### use new_version(recommended)
```bash
cd new_version
```
run index.html with http-server or [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### use old_version
> The Internet and [official documentaion](https://rustwasm.github.io/docs/wasm-pack/quickstart.html) use webpack. However, this currently causes many [compatibility issues](https://github.com/rustwasm/create-wasm-app/pulls). Therefore, I recommend using the `new_version` method.
```bash
cd old_version
npm install
```
```bash
npm run start
```
