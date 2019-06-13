import { mapBundleSync } from 'fluent-sequence';
import { CachedSyncIterable } from 'cached-iterable';
export const current = Symbol('current');

const cache = new WeakMap();

export default class VueLocalization {
  constructor(bundles) {
    this.setBundles(bundles);
  }

  setBundles(bundles) {
    this[current] = bundles;
    if (!cache.has(bundles)) {
      cache.set(bundles, CachedSyncIterable.from(bundles));
    }
  }

  getBundle(id) {
    return mapBundleSync(cache.get(this[current]), id);
  }
}
