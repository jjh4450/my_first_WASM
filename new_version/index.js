import init, { greet } from '../hello-wasm/pkg/hello_wasm.js'; // 경로는 실제 상황에 맞게 조정하세요.

async function run() {
    await init(); // WebAssembly 모듈 초기화
    greet(); // 초기화 후 greet 함수 호출
}
  
run().catch(console.error);