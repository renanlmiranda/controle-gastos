import * as dotenv from 'dotenv'

import { IEnvs } from '@/shared/envs/IEnvs'

dotenv.config()

export const envs: IEnvs = {
    nodeEnv: process.env.NODE_ENV || 'dev',
}
