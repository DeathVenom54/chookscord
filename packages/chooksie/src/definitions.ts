/* eslint-disable object-curly-newline */
import type * as types from './types';
import type { ClientEvents } from 'discord.js';

export function defineConfig(
  config: types.ChooksConfig,
): types.ChooksConfig {
  return config;
}

export function defineEvent<T extends keyof ClientEvents, Deps extends Record<string, unknown>>(
  event: Omit<types.ChooksEvent<T, Deps>, 'execute'> &
  { execute: (ctx: types.ChooksEventContext, ...args: ClientEvents[T]) => unknown } &
  ThisType<Readonly<Deps>>,
): types.ChooksEvent<T, Deps> {
  return event;
}

export function defineSlashCommand<T extends Record<string, unknown>>(
  command: Omit<types.ChooksSlashCommand<T>, 'execute'> &
  { execute: (ctx: types.ChooksCommandContext) => unknown } &
  ThisType<Readonly<T>>,
): types.ChooksSlashCommand<T> {
  return command;
}

export function defineSlashSubCommand(
  command: types.ChooksSlashSubCommand,
): types.ChooksSlashSubCommand {
  return command;
}

export function defineContextCommand<T extends Record<string, unknown>>(
  command: Omit<types.ChooksContextCommand<T>, 'execute'> &
  { execute: (ctx: types.ChooksContextCommandContext) => unknown } &
  ThisType<Readonly<T>>,
): types.ChooksContextCommand<T> {
  return command;
}

export function defineNonCommandOption(
  option: types.ChooksNonCommandOption,
): types.ChooksNonCommandOption {
  return option;
}

export function defineSubCommandGroup(
  group: types.ChooksCommandGroupOption,
): types.ChooksCommandGroupOption {
  return group;
}

export function defineSubCommand<T extends Record<string, unknown>>(
  subCommand: Omit<types.ChooksSubCommandOption<T>, 'execute'> &
  { execute: (ctx: types.ChooksCommandContext) => unknown } &
  ThisType<Readonly<T>>,
): types.ChooksSubCommandOption<T> {
  return subCommand;
}

export function defineLifecycle(
  lifecycle: types.ChooksLifecycle,
): types.ChooksLifecycle {
  return lifecycle;
}