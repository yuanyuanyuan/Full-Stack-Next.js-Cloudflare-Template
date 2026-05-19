import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export async function getDb() {
    const { env } = await getCloudflareContext();
    // 绑定名称需与 wrangler.jsonc 中的配置一致
    return drizzle(env.next_cf_app, { schema });
}

export * from "./schema";
