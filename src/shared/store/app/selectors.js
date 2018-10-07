/* eslint-disable import/prefer-default-export */
// @flow
import type { AppT } from './types';

export const app = (state: { app: AppT }): AppT => state.app;
