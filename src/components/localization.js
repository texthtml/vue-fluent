import { mapBundleSync } from 'fluent-sequence';
import { CachedSyncIterable } from 'cached-iterable';

export default class VueLocalization {
  constructor(bundles) {
    this.bundles = CachedSyncIterable.from(bundles);
    this.subs = new Set();
  }

  /*
   * Subscribe a `Localized` component to changes of `bundles`.
   */
  subscribe(comp) {
    this.subs.add(comp);
  }

  /*
   * Unsubscribe a `Localized` component from `bundles` changes.
   */
  unsubscribe(comp) {
    this.subs.delete(comp);
  }

  /*
   * Set a new `bundles` iterable and trigger the retranslation.
   */
  setBundles(bundles) {
    this.bundles = CachedSyncIterable.from(bundles);

    // Update all subscribed Localized components.
    this.subs.forEach(comp => comp.relocalize());
  }

  getBundle(id) {
    return mapBundleSync(this.bundles, id);
  }

  /*
   * Find a translation by `id` and format it to a string using `args`.
   */
  getString(id, args, fallback) {
    const bundle = this.getBundle(id);

    if (bundle === null) {
      return fallback || id;
    }

    const msg = bundle.getMessage(id);
    return bundle.format(msg, args);
  }
}
