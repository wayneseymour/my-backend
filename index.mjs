import { add_one } from './crate/target/wasm32-unknown-unknown/release/utils.wasm'

console.log(`\n### add_one(2): \n\t${add_one(2)}`);
console.log(`\n### add_one(42): \n\t${add_one(42)}`);
