declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			MY_KV_1: KVNamespace;
			MY_KV_2: KVNamespace;
			MY_R2: R2Bucket;
			MY_DO: DurableObjectNamespace;
			TEST_D1: D1Database;
		}
	}
}

export {};