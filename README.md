# WASM, RUST, and NODEJS

## Build and Run

```
cd ./crate

cargo build --target wasm32-unknown-unknown --release

# optional
wasm-gc target/wasm32-unknown-unknown/release/utils.wasm -o utils.gc.wasm 

cd ..
node --experimental-modules --loader @wasm-tool/node index.mjs
```
