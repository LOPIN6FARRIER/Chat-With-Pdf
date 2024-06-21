/* empty css                          */
import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, k as renderComponent, m as maybeRenderHead } from '../astro_CscJdlj8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { fromEvent } from 'file-selector';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/proyectos/chat-with-pdf/src/layouts/Layout.astro", void 0);

/** @returns {void} */
function noop() {}

const identity = (x) => x;

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

/** @returns {{}} */
function compute_slots(slots) {
	const result = {};
	for (const key in slots) {
		result[key] = true;
	}
	return result;
}

/**
 * @template T
 * @param {string} type
 * @param {T} [detail]
 * @param {{ bubbles?: boolean, cancelable?: boolean }} [options]
 * @returns {CustomEvent<T>}
 */
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
	return new CustomEvent(type, { detail, bubbles, cancelable });
}

/**
 * @typedef {Node & {
 * 	claim_order?: number;
 * 	hydrate_init?: true;
 * 	actual_end_child?: NodeEx;
 * 	childNodes: NodeListOf<NodeEx>;
 * }} NodeEx
 */

/** @typedef {ChildNode & NodeEx} ChildNodeEx */

/** @typedef {NodeEx & { claim_order: number }} NodeEx2 */

/**
 * @typedef {ChildNodeEx[] & {
 * 	claim_info?: {
 * 		last_index: number;
 * 		total_claimed: number;
 * 	};
 * }} ChildNodeArray
 */

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error('Function called outside component initialization');
	return current_component;
}

/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs/svelte#ondestroy
 * @param {() => any} fn
 * @returns {void}
 */
function onDestroy(fn) {
	get_current_component().$$.on_destroy.push(fn);
}

/**
 * Creates an event dispatcher that can be used to dispatch [component events](https://svelte.dev/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
 * ```ts
 * const dispatch = createEventDispatcher<{
 *  loaded: never; // does not take a detail argument
 *  change: string; // takes a detail argument of type string, which is required
 *  optional: number | null; // takes an optional detail argument of type number
 * }>();
 * ```
 *
 * https://svelte.dev/docs/svelte#createeventdispatcher
 * @template {Record<string, any>} [EventMap=any]
 * @returns {import('./public.js').EventDispatcher<EventMap>}
 */
function createEventDispatcher() {
	const component = get_current_component();
	return (type, detail, { cancelable = false } = {}) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = custom_event(/** @type {string} */ (type), detail, { cancelable });
			callbacks.slice().forEach((fn) => {
				fn.call(component, event);
			});
			return !event.defaultPrevented;
		}
		return true;
	};
}

/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#setcontext
 * @template T
 * @param {any} key
 * @param {T} context
 * @returns {T}
 */
function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
	return context;
}

/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#getcontext
 * @template T
 * @param {any} key
 * @returns {T}
 */
function getContext(key) {
	return get_current_component().$$.context.get(key);
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */

/** regex of all html void element names */
const void_element_names =
	/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_void(name) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (boolean_attributes.has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean )) return '';
	const assignment = `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key])
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/**
 * Animates the opacity of an element from 0 to the current opacity for `in` transitions and from the current opacity to 0 for `out` transitions.
 *
 * https://svelte.dev/docs/svelte-transition#fade
 * @param {Element} node
 * @param {import('./public').FadeParams} [params]
 * @returns {import('./public').TransitionConfig}
 */
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/utils/Frame.svelte generated by Svelte v4.2.16 */

const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		"tag","color","rounded","border","shadow","node","use","options","role","transition","params","open"
	]);

	const noop = () => {
		
	};

	setContext('background', true);
	let { tag = $$restProps.href ? 'a' : 'div' } = $$props;
	let { color = 'default' } = $$props;
	let { rounded = false } = $$props;
	let { border = false } = $$props;
	let { shadow = false } = $$props;
	let { node = undefined } = $$props;
	let { use = noop } = $$props;
	let { options = {} } = $$props;
	let { role = undefined } = $$props;
	let { transition = undefined } = $$props;
	let { params = {} } = $$props;
	let { open = true } = $$props;
	const dispatch = createEventDispatcher();

	// your script goes here
	const bgColors = {
		gray: 'bg-gray-50 dark:bg-gray-800',
		red: 'bg-red-50 dark:bg-gray-800',
		yellow: 'bg-yellow-50 dark:bg-gray-800 ',
		green: 'bg-green-50 dark:bg-gray-800 ',
		indigo: 'bg-indigo-50 dark:bg-gray-800 ',
		purple: 'bg-purple-50 dark:bg-gray-800 ',
		pink: 'bg-pink-50 dark:bg-gray-800 ',
		blue: 'bg-blue-50 dark:bg-gray-800 ',
		light: 'bg-gray-50 dark:bg-gray-700',
		dark: 'bg-gray-50 dark:bg-gray-800',
		default: 'bg-white dark:bg-gray-800',
		dropdown: 'bg-white dark:bg-gray-700',
		navbar: 'bg-white dark:bg-gray-900',
		navbarUl: 'bg-gray-50 dark:bg-gray-800',
		form: 'bg-gray-50 dark:bg-gray-700',
		primary: 'bg-primary-50 dark:bg-gray-800 ',
		orange: 'bg-orange-50 dark:bg-orange-800',
		none: ''
	};

	const textColors = {
		gray: 'text-gray-800 dark:text-gray-300',
		red: 'text-red-800 dark:text-red-400',
		yellow: 'text-yellow-800 dark:text-yellow-300',
		green: 'text-green-800 dark:text-green-400',
		indigo: 'text-indigo-800 dark:text-indigo-400',
		purple: 'text-purple-800 dark:text-purple-400',
		pink: 'text-pink-800 dark:text-pink-400',
		blue: 'text-blue-800 dark:text-blue-400',
		light: 'text-gray-700 dark:text-gray-300',
		dark: 'text-gray-700 dark:text-gray-300',
		default: 'text-gray-500 dark:text-gray-400',
		dropdown: 'text-gray-700 dark:text-gray-200',
		navbar: 'text-gray-700 dark:text-gray-200',
		navbarUl: 'text-gray-700 dark:text-gray-400',
		form: 'text-gray-900 dark:text-white',
		primary: 'text-primary-800 dark:text-primary-400',
		orange: 'text-orange-800 dark:text-orange-400',
		none: ''
	};

	const borderColors = {
		gray: 'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800',
		red: 'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800',
		yellow: 'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800',
		green: 'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800',
		indigo: 'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800',
		purple: 'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800',
		pink: 'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800',
		blue: 'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800',
		light: 'border-gray-500 divide-gray-500',
		dark: 'border-gray-500 divide-gray-500',
		default: 'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700',
		dropdown: 'border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600',
		navbar: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
		navbarUl: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
		form: 'border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700',
		primary: 'border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ',
		orange: 'border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800',
		none: ''
	};

	let divClass;
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
	if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
	if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
	if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);

	{
		dispatch(open ? 'open' : 'close');
	}

	{
		dispatch('show', open);
	}

	color = color ?? 'default'; // for cases when undefined

	{
		setContext('color', color);
	}

	divClass = twMerge(bgColors[color], textColors[color], rounded && 'rounded-lg', border && 'border', borderColors[color], shadow && 'shadow-md', $$props.class);

	return `${transition && open
	? `${(tag$1 => {
			return tag$1
			? `<${tag}${spread(
					[
						{ role: escape_attribute_value(role) },
						escape_object($$restProps),
						{ class: escape_attribute_value(divClass) }
					],
					{}
				)}${add_attribute("this", node, 0)}>${is_void(tag$1)
				? ''
				: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
			: '';
		})(tag)}`
	: `${open
		? `${(tag$1 => {
				return tag$1
				? `<${tag}${spread(
						[
							{ role: escape_attribute_value(role) },
							escape_object($$restProps),
							{ class: escape_attribute_value(divClass) }
						],
						{}
					)}${add_attribute("this", node, 0)}>${is_void(tag$1)
					? ''
					: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
				: '';
			})(tag)}`
		: ``}`} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/utils/TransitionFrame.svelte generated by Svelte v4.2.16 */

const TransitionFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["transition","params","open"]);
	let { transition = fade } = $$props;
	let { params = {} } = $$props;
	let { open = true } = $$props;

	function close(ev) {
		if (ev?.stopPropagation) ev.stopPropagation();
		open = false;
	}

	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
	if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;

	do {
		$$settled = true;

		// $$result.head is mutated by the literal expression
		// need to reset it if we're looping back to prevent duplication
		$$result.head = previous_head;

		$$rendered = `${validate_component(Frame, "Frame").$$render(
			$$result,
			Object.assign({}, { transition }, { params }, $$restProps, { open }),
			{
				open: $$value => {
					open = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `${slots.default ? slots.default({ close }) : ``}`;
				}
			}
		)} `;
	} while (!$$settled);

	return $$rendered;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/toolbar/ToolbarButton.svelte generated by Svelte v4.2.16 */

const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["color","name","ariaLabel","size","href"]);
	const background = getContext('background');
	let { color = 'default' } = $$props;
	let { name = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
	let { size = 'md' } = $$props;
	let { href = undefined } = $$props;

	const colors = {
		dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
		gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
		red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
		yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
		green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
		indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
		purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
		pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
		blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
		primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
		default: 'focus:ring-gray-400 hover:bg-gray-100'
	};

	const sizing = {
		xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
		sm: 'm-0.5 rounded focus:ring-1 p-0.5',
		md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
		lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
	};

	let buttonClass;

	const svgSizes = {
		xs: 'w-3 h-3',
		sm: 'w-3.5 h-3.5',
		md: 'w-5 h-5',
		lg: 'w-5 h-5'
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);

	buttonClass = twMerge(
		'focus:outline-none whitespace-normal',
		sizing[size],
		colors[color],
		color === 'default' && (background
		? 'dark:hover:bg-gray-600'
		: 'dark:hover:bg-gray-700'),
		$$props.class
	);

	return `${href
	? `<a${spread(
			[
				{ href: escape_attribute_value(href) },
				escape_object($$restProps),
				{
					class: escape_attribute_value(buttonClass)
				},
				{
					"aria-label": escape_attribute_value(ariaLabel ?? name)
				}
			],
			{}
		)}>${name
		? `<span class="sr-only">${escape(name)}</span>`
		: ``} ${slots.default
		? slots.default({ svgSize: svgSizes[size] })
		: ``}</a>`
	: `<button${spread(
			[
				{ type: "button" },
				escape_object($$restProps),
				{
					class: escape_attribute_value(buttonClass)
				},
				{
					"aria-label": escape_attribute_value(ariaLabel ?? name)
				}
			],
			{}
		)}>${name
		? `<span class="sr-only">${escape(name)}</span>`
		: ``} ${slots.default
		? slots.default({ svgSize: svgSizes[size] })
		: ``}</button>`} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/utils/CloseButton.svelte generated by Svelte v4.2.16 */

const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["name"]);
	let { name = 'Close' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);

	return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge('ms-auto', $$props.class) }), {}, {
		default: ({ svgSize }) => {
			return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
		}
	})} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/alert/Alert.svelte generated by Svelte v4.2.16 */

const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["dismissable","defaultClass"]);
	let $$slots = compute_slots(slots);
	let { dismissable = false } = $$props;
	let { defaultClass = 'p-4 gap-3 text-sm' } = $$props;
	let divClass;
	if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	divClass = twMerge(defaultClass, ($$slots.icon || dismissable) && 'flex items-center', $$props.class);

	return `${validate_component(TransitionFrame, "TransitionFrame").$$render($$result, Object.assign({}, { dismissable }, { color: "primary" }, { role: "alert" }, { rounded: true }, $$restProps, { class: divClass }), {}, {
		default: ({ close }) => {
			return `${$$slots.icon
			? `${slots.icon ? slots.icon({}) : ``}`
			: ``} ${$$slots.icon || dismissable
			? `<div>${slots.default ? slots.default({}) : ``}</div>`
			: `${slots.default ? slots.default({}) : ``}`} ${dismissable
			? `${slots["close-button"]
				? slots["close-button"]({ close })
				: ` ${validate_component(CloseButton, "CloseButton").$$render(
						$$result,
						{
							class: "ms-auto -me-1.5 -my-1.5 dark:hover:bg-gray-700",
							color: $$restProps.color
						},
						{},
						{}
					)} `}`
			: ``}`;
		}
	})} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/utils/Wrapper.svelte generated by Svelte v4.2.16 */

const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["tag","show","use"]);
	let { tag = 'div' } = $$props;
	let { show } = $$props;

	let { use = () => {
		
	} } = $$props;

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);

	return `${show
	? `${(tag$1 => {
			return tag$1
			? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1)
				? ''
				: `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? '' : `</${tag$1}>`}`
			: '';
		})(tag)}`
	: `${slots.default ? slots.default({}) : ``}`} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/forms/Label.svelte generated by Svelte v4.2.16 */

const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let labelClass;
	let $$restProps = compute_rest_props($$props, ["color","defaultClass","show"]);
	let { color = 'gray' } = $$props;
	let { defaultClass = 'text-sm rtl:text-right font-medium block' } = $$props;
	let { show = true } = $$props;
	let node;

	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);

	{
		{
			color = color;
		}
	}

	labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);

	return `${show
	? ` <label${spread(
			[
				escape_object($$restProps),
				{
					class: escape_attribute_value(labelClass)
				}
			],
			{}
		)}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>`
	: `${slots.default ? slots.default({}) : ``}`} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/forms/Input.svelte generated by Svelte v4.2.16 */

function clampSize(s) {
	return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
}

const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let _size;
	let $$restProps = compute_rest_props($$props, ["type","value","size","defaultClass","color","floatClass"]);
	let $$slots = compute_slots(slots);
	let { type = 'text' } = $$props;
	let { value = undefined } = $$props;
	let { size = undefined } = $$props;
	let { defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right' } = $$props;
	let { color = 'base' } = $$props;
	let { floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400' } = $$props;

	const borderClasses = {
		base: 'border-gray-300 dark:border-gray-600',
		tinted: 'border-gray-300 dark:border-gray-500',
		green: 'border-green-500 dark:border-green-400',
		red: 'border-red-500 dark:border-red-400'
	};

	const ringClasses = {
		base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
		green: 'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
		red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
	};

	const colorClasses = {
		base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
		tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
		green: 'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
		red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
	};

	// tinted if put in component having its own background
	let background = getContext('background');

	let group = getContext('group');

	const textSizes = {
		sm: 'sm:text-xs',
		md: 'text-sm',
		lg: 'sm:text-base'
	};

	const leftPadding = { sm: 'ps-9', md: 'ps-10', lg: 'ps-11' };
	const rightPadding = { sm: 'pe-9', md: 'pe-10', lg: 'pe-11' };
	const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-3' };
	let inputClass;
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0) $$bindings.floatClass(floatClass);
	_size = size || clampSize(group?.size) || 'md';

	{
		{
			const _color = color === 'base' && background ? 'tinted' : color;

			inputClass = twMerge([
				defaultClass,
				inputPadding[_size],
				$$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size],
				ringClasses[color],
				colorClasses[_color],
				borderClasses[_color],
				textSizes[_size],
				group || 'rounded-lg',
				group && 'first:rounded-s-lg last:rounded-e-lg',
				group && 'border-s-0 first:border-s last:border-e',
				$$props.class
			]);
		}
	}

	return `${validate_component(Wrapper, "Wrapper").$$render(
		$$result,
		{
			class: "relative w-full",
			show: $$slots.left || $$slots.right
		},
		{},
		{
			default: () => {
				return `${$$slots.left
				? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>`
				: ``} ${slots.default
				? slots.default({
						props: { ...$$restProps, class: inputClass }
					})
				: ` <input${spread(
						[
							escape_object($$restProps),
							escape_object({ type }),
							{
								class: escape_attribute_value(inputClass)
							}
						],
						{}
					)}${add_attribute("value", value, 0)}> `} ${$$slots.right
				? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>`
				: ``}`;
			}
		}
	)} `;
});

/* D:/proyectos/chat-with-pdf/node_modules/flowbite-svelte/dist/spinner/Spinner.svelte generated by Svelte v4.2.16 */

const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ["color","bg","customColor","size","currentFill","currentColor"]);
	let { color = 'primary' } = $$props;
	let { bg = 'text-gray-300' } = $$props;
	let { customColor = '' } = $$props;
	let { size = '8' } = $$props;
	let { currentFill = 'currentFill' } = $$props;
	let { currentColor = 'currentColor' } = $$props;
	let iconsize = `w-${size} h-${size}`;

	if (currentFill !== 'currentFill') {
		color = undefined;
	}

	const fillColorClasses = {
		primary: 'fill-primary-600',
		blue: 'fill-blue-600',
		gray: 'fill-gray-600 dark:fill-gray-300',
		green: 'fill-green-500',
		red: 'fill-red-600',
		yellow: 'fill-yellow-400',
		pink: 'fill-pink-600',
		purple: 'fill-purple-600',
		white: 'fill-white',
		custom: customColor
	};

	let fillColorClass = color === undefined
	? ''
	: fillColorClasses[color] ?? fillColorClasses.blue;

	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0) $$bindings.bg(bg);
	if ($$props.customColor === void 0 && $$bindings.customColor && customColor !== void 0) $$bindings.customColor(customColor);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0) $$bindings.currentFill(currentFill);
	if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0) $$bindings.currentColor(currentColor);

	return `<svg${spread(
		[
			escape_object($$restProps),
			{ role: "status" },
			{
				class: escape_attribute_value(twMerge('inline -mt-px animate-spin dark:text-gray-600', iconsize, bg, fillColorClass, $$props.class))
			},
			{ viewBox: "0 0 100 101" },
			{ fill: "none" },
			{ xmlns: "http://www.w3.org/2000/svg" }
		],
		{}
	)}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"${add_attribute("fill", currentColor, 0)}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"${add_attribute("fill", currentFill, 0)}></path></svg> `;
});

const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHATTING: 2,
  ERROR: 3
};
const appStatus = writable(APP_STATUS.INIT);
const appStatusInfo = writable({ id: "", url: "", pages: 0 });

/* D:/proyectos/chat-with-pdf/node_modules/svelte-file-dropzone/dist/components/Dropzone.svelte generated by Svelte v4.2.16 */

const css = {
	code: ".dropzone.svelte-817dg2{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out}.dropzone.svelte-817dg2:focus{border-color:#2196f3}",
	map: "{\"version\":3,\"file\":\"Dropzone.svelte\",\"sources\":[\"Dropzone.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { fromEvent } from \\\"file-selector\\\";\\r\\n  import {\\r\\n    fileAccepted,\\r\\n    fileMatchSize,\\r\\n    isEvtWithFiles,\\r\\n    isIeOrEdge,\\r\\n    isPropagationStopped,\\r\\n    TOO_MANY_FILES_REJECTION\\r\\n  } from \\\"../utils/index\\\";\\r\\n  import { onMount, onDestroy, createEventDispatcher } from \\\"svelte\\\";\\r\\n\\r\\n  //props\\r\\n  /**\\r\\n   * Set accepted file types.\\r\\n   * See https://github.com/okonet/attr-accept for more information.\\r\\n   */\\r\\n  /**\\r\\n   * @type {string | Array<string>}\\r\\n   */\\r\\n  export let accept = undefined;\\r\\n  export let disabled = false;\\r\\n  export let getFilesFromEvent = fromEvent;\\r\\n  export let maxSize = Infinity;\\r\\n  export let minSize = 0;\\r\\n  export let multiple = true;\\r\\n  export let preventDropOnDocument = true;\\r\\n  export let noClick = false;\\r\\n  export let noKeyboard = false;\\r\\n  export let noDrag = false;\\r\\n  export let noDragEventsBubbling = false;\\r\\n  export let containerClasses = \\\"\\\";\\r\\n  export let containerStyles = \\\"\\\";\\r\\n  export let disableDefaultStyles = false;\\r\\n  export let name = \\\"\\\";\\r\\n  export let inputElement = undefined;\\r\\n  export let required = false;\\r\\n  const dispatch = createEventDispatcher();\\r\\n\\r\\n  //state\\r\\n\\r\\n  let state = {\\r\\n    isFocused: false,\\r\\n    isFileDialogActive: false,\\r\\n    isDragActive: false,\\r\\n    isDragAccept: false,\\r\\n    isDragReject: false,\\r\\n    draggedFiles: [],\\r\\n    acceptedFiles: [],\\r\\n    fileRejections: []\\r\\n  };\\r\\n\\r\\n  let rootRef;\\r\\n\\r\\n  function resetState() {\\r\\n    state.isFileDialogActive = false;\\r\\n    state.isDragActive = false;\\r\\n    state.draggedFiles = [];\\r\\n    state.acceptedFiles = [];\\r\\n    state.fileRejections = [];\\r\\n  }\\r\\n\\r\\n  // Fn for opening the file dialog programmatically\\r\\n  function openFileDialog() {\\r\\n    if (inputElement) {\\r\\n      inputElement.value = null; // TODO check if null needs to be set\\r\\n      state.isFileDialogActive = true;\\r\\n      inputElement.click();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone\\r\\n  function onKeyDownCb(event) {\\r\\n    // Ignore keyboard events bubbling up the DOM tree\\r\\n    if (!rootRef || !rootRef.isEqualNode(event.target)) {\\r\\n      return;\\r\\n    }\\r\\n\\r\\n    if (event.keyCode === 32 || event.keyCode === 13) {\\r\\n      event.preventDefault();\\r\\n      openFileDialog();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  // Update focus state for the dropzone\\r\\n  function onFocusCb() {\\r\\n    state.isFocused = true;\\r\\n  }\\r\\n  function onBlurCb() {\\r\\n    state.isFocused = false;\\r\\n  }\\r\\n\\r\\n  // Cb to open the file dialog when click occurs on the dropzone\\r\\n  function onClickCb() {\\r\\n    if (noClick) {\\r\\n      return;\\r\\n    }\\r\\n\\r\\n    // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()\\r\\n    // to ensure React can handle state changes\\r\\n    // See: https://github.com/react-dropzone/react-dropzone/issues/450\\r\\n    if (isIeOrEdge()) {\\r\\n      setTimeout(openFileDialog, 0);\\r\\n    } else {\\r\\n      openFileDialog();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function onDragEnterCb(event) {\\r\\n    event.preventDefault();\\r\\n    stopPropagation(event);\\r\\n\\r\\n    dragTargetsRef = [...dragTargetsRef, event.target];\\r\\n\\r\\n    if (isEvtWithFiles(event)) {\\r\\n      Promise.resolve(getFilesFromEvent(event)).then(draggedFiles => {\\r\\n        if (isPropagationStopped(event) && !noDragEventsBubbling) {\\r\\n          return;\\r\\n        }\\r\\n\\r\\n        state.draggedFiles = draggedFiles;\\r\\n        state.isDragActive = true;\\r\\n\\r\\n        dispatch(\\\"dragenter\\\", {\\r\\n          dragEvent: event\\r\\n        });\\r\\n      });\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function onDragOverCb(event) {\\r\\n    event.preventDefault();\\r\\n    stopPropagation(event);\\r\\n\\r\\n    if (event.dataTransfer) {\\r\\n      try {\\r\\n        event.dataTransfer.dropEffect = \\\"copy\\\";\\r\\n      } catch {} /* eslint-disable-line no-empty */\\r\\n    }\\r\\n\\r\\n    if (isEvtWithFiles(event)) {\\r\\n      dispatch(\\\"dragover\\\", {\\r\\n        dragEvent: event\\r\\n      });\\r\\n    }\\r\\n\\r\\n    return false;\\r\\n  }\\r\\n\\r\\n  function onDragLeaveCb(event) {\\r\\n    event.preventDefault();\\r\\n    stopPropagation(event);\\r\\n\\r\\n    // Only deactivate once the dropzone and all children have been left\\r\\n    const targets = dragTargetsRef.filter(target => rootRef && rootRef.contains(target));\\r\\n    // Make sure to remove a target present multiple times only once\\r\\n    // (Firefox may fire dragenter/dragleave multiple times on the same element)\\r\\n    const targetIdx = targets.indexOf(event.target);\\r\\n    if (targetIdx !== -1) {\\r\\n      targets.splice(targetIdx, 1);\\r\\n    }\\r\\n    dragTargetsRef = targets;\\r\\n    if (targets.length > 0) {\\r\\n      return;\\r\\n    }\\r\\n\\r\\n    state.isDragActive = false;\\r\\n    state.draggedFiles = [];\\r\\n\\r\\n    if (isEvtWithFiles(event)) {\\r\\n      dispatch(\\\"dragleave\\\", {\\r\\n        dragEvent: event\\r\\n      });\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function onDropCb(event) {\\r\\n    event.preventDefault();\\r\\n    stopPropagation(event);\\r\\n\\r\\n    dragTargetsRef = [];\\r\\n\\r\\n    if (isEvtWithFiles(event)) {\\r\\n      dispatch(\\\"filedropped\\\", {\\r\\n        event\\r\\n      });\\r\\n      Promise.resolve(getFilesFromEvent(event)).then(files => {\\r\\n        if (isPropagationStopped(event) && !noDragEventsBubbling) {\\r\\n          return;\\r\\n        }\\r\\n\\r\\n        const acceptedFiles = [];\\r\\n        const fileRejections = [];\\r\\n\\r\\n        files.forEach(file => {\\r\\n          const [accepted, acceptError] = fileAccepted(file, accept);\\r\\n          const [sizeMatch, sizeError] = fileMatchSize(file, minSize, maxSize);\\r\\n          if (accepted && sizeMatch) {\\r\\n            acceptedFiles.push(file);\\r\\n          } else {\\r\\n            const errors = [acceptError, sizeError].filter(e => e);\\r\\n            fileRejections.push({ file, errors });\\r\\n          }\\r\\n        });\\r\\n\\r\\n        if (!multiple && acceptedFiles.length > 1) {\\r\\n          // Reject everything and empty accepted files\\r\\n          acceptedFiles.forEach(file => {\\r\\n            fileRejections.push({ file, errors: [TOO_MANY_FILES_REJECTION] });\\r\\n          });\\r\\n          acceptedFiles.splice(0);\\r\\n        }\\r\\n\\r\\n        // Files dropped keep input in sync\\r\\n        if (event.dataTransfer) {\\r\\n          inputElement.files = event.dataTransfer.files;\\r\\n        }\\r\\n\\r\\n        state.acceptedFiles = acceptedFiles;\\r\\n        state.fileRejections = fileRejections;\\r\\n\\r\\n        dispatch(\\\"drop\\\", {\\r\\n          acceptedFiles,\\r\\n          fileRejections,\\r\\n          event\\r\\n        });\\r\\n\\r\\n        if (fileRejections.length > 0) {\\r\\n          dispatch(\\\"droprejected\\\", {\\r\\n            fileRejections,\\r\\n            event\\r\\n          });\\r\\n        }\\r\\n\\r\\n        if (acceptedFiles.length > 0) {\\r\\n          dispatch(\\\"dropaccepted\\\", {\\r\\n            acceptedFiles,\\r\\n            event\\r\\n          });\\r\\n        }\\r\\n      });\\r\\n    }\\r\\n    resetState();\\r\\n  }\\r\\n\\r\\n  $: composeHandler = fn => (disabled ? null : fn);\\r\\n\\r\\n  $: composeKeyboardHandler = fn => (noKeyboard ? null : composeHandler(fn));\\r\\n\\r\\n  $: composeDragHandler = fn => (noDrag ? null : composeHandler(fn));\\r\\n\\r\\n  function stopPropagation(event) {\\r\\n    if (noDragEventsBubbling) {\\r\\n      event.stopPropagation();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  // allow the entire document to be a drag target\\r\\n  function onDocumentDragOver(event) {\\r\\n    if (preventDropOnDocument) {\\r\\n      event.preventDefault();\\r\\n    }\\r\\n  }\\r\\n\\r\\n  let dragTargetsRef = [];\\r\\n  function onDocumentDrop(event) {\\r\\n    if (!preventDropOnDocument) {\\r\\n      return;\\r\\n    }\\r\\n    if (rootRef && rootRef.contains(event.target)) {\\r\\n      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler\\r\\n      return;\\r\\n    }\\r\\n    event.preventDefault();\\r\\n    dragTargetsRef = [];\\r\\n  }\\r\\n\\r\\n  // Update file dialog active state when the window is focused on\\r\\n  function onWindowFocus() {\\r\\n    // Execute the timeout only if the file dialog is opened in the browser\\r\\n    if (state.isFileDialogActive) {\\r\\n      setTimeout(() => {\\r\\n        if (inputElement) {\\r\\n          const { files } = inputElement;\\r\\n\\r\\n          if (!files.length) {\\r\\n            state.isFileDialogActive = false;\\r\\n            dispatch(\\\"filedialogcancel\\\");\\r\\n          }\\r\\n        }\\r\\n      }, 300);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  onDestroy(() => {\\r\\n    // This is critical for canceling the timeout behaviour on `onWindowFocus()`\\r\\n    inputElement = null;\\r\\n  });\\r\\n\\r\\n  function onInputElementClick(event) {\\r\\n    event.stopPropagation();\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<svelte:window on:focus={onWindowFocus} on:dragover={onDocumentDragOver} on:drop={onDocumentDrop} />\\r\\n\\r\\n<div\\r\\n  bind:this={rootRef}\\r\\n  tabindex=\\\"0\\\"\\r\\n  role=\\\"button\\\"\\r\\n  class=\\\"{disableDefaultStyles ? '' : 'dropzone'}\\r\\n  {containerClasses}\\\"\\r\\n  style={containerStyles}\\r\\n  on:keydown={composeKeyboardHandler(onKeyDownCb)}\\r\\n  on:focus={composeKeyboardHandler(onFocusCb)}\\r\\n  on:blur={composeKeyboardHandler(onBlurCb)}\\r\\n  on:click={composeHandler(onClickCb)}\\r\\n  on:dragenter={composeDragHandler(onDragEnterCb)}\\r\\n  on:dragover={composeDragHandler(onDragOverCb)}\\r\\n  on:dragleave={composeDragHandler(onDragLeaveCb)}\\r\\n  on:drop={composeDragHandler(onDropCb)}\\r\\n>\\r\\n  <input\\r\\n    accept={accept?.toString()}\\r\\n    {multiple}\\r\\n    {required}\\r\\n    type=\\\"file\\\"\\r\\n    {name}\\r\\n    autocomplete=\\\"off\\\"\\r\\n    tabindex=\\\"-1\\\"\\r\\n    on:change={onDropCb}\\r\\n    on:click={onInputElementClick}\\r\\n    bind:this={inputElement}\\r\\n    style=\\\"display: none;\\\"\\r\\n  />\\r\\n  <slot>\\r\\n    <p>Drag 'n' drop some files here, or click to select files</p>\\r\\n  </slot>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .dropzone {\\r\\n    flex: 1;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 20px;\\r\\n    border-width: 2px;\\r\\n    border-radius: 2px;\\r\\n    border-color: #eeeeee;\\r\\n    border-style: dashed;\\r\\n    background-color: #fafafa;\\r\\n    color: #bdbdbd;\\r\\n    outline: none;\\r\\n    transition: border 0.24s ease-in-out;\\r\\n  }\\r\\n  .dropzone:focus {\\r\\n    border-color: #2196f3;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAqVE,uBAAU,CACR,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,OAAO,CACrB,YAAY,CAAE,MAAM,CACpB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAAC,KAAK,CAAC,WAC3B,CACA,uBAAS,MAAO,CACd,YAAY,CAAE,OAChB\"}"
};

const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { accept = undefined } = $$props;
	let { disabled = false } = $$props;
	let { getFilesFromEvent = fromEvent } = $$props;
	let { maxSize = Infinity } = $$props;
	let { minSize = 0 } = $$props;
	let { multiple = true } = $$props;
	let { preventDropOnDocument = true } = $$props;
	let { noClick = false } = $$props;
	let { noKeyboard = false } = $$props;
	let { noDrag = false } = $$props;
	let { noDragEventsBubbling = false } = $$props;
	let { containerClasses = "" } = $$props;
	let { containerStyles = "" } = $$props;
	let { disableDefaultStyles = false } = $$props;
	let { name = "" } = $$props;
	let { inputElement = undefined } = $$props;
	let { required = false } = $$props;
	createEventDispatcher();

	let rootRef;

	onDestroy(() => {
		// This is critical for canceling the timeout behaviour on `onWindowFocus()`
		inputElement = null;
	});

	if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0) $$bindings.accept(accept);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	if ($$props.getFilesFromEvent === void 0 && $$bindings.getFilesFromEvent && getFilesFromEvent !== void 0) $$bindings.getFilesFromEvent(getFilesFromEvent);
	if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0) $$bindings.maxSize(maxSize);
	if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0) $$bindings.minSize(minSize);
	if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
	if ($$props.preventDropOnDocument === void 0 && $$bindings.preventDropOnDocument && preventDropOnDocument !== void 0) $$bindings.preventDropOnDocument(preventDropOnDocument);
	if ($$props.noClick === void 0 && $$bindings.noClick && noClick !== void 0) $$bindings.noClick(noClick);
	if ($$props.noKeyboard === void 0 && $$bindings.noKeyboard && noKeyboard !== void 0) $$bindings.noKeyboard(noKeyboard);
	if ($$props.noDrag === void 0 && $$bindings.noDrag && noDrag !== void 0) $$bindings.noDrag(noDrag);
	if ($$props.noDragEventsBubbling === void 0 && $$bindings.noDragEventsBubbling && noDragEventsBubbling !== void 0) $$bindings.noDragEventsBubbling(noDragEventsBubbling);
	if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0) $$bindings.containerClasses(containerClasses);
	if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0) $$bindings.containerStyles(containerStyles);
	if ($$props.disableDefaultStyles === void 0 && $$bindings.disableDefaultStyles && disableDefaultStyles !== void 0) $$bindings.disableDefaultStyles(disableDefaultStyles);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.inputElement === void 0 && $$bindings.inputElement && inputElement !== void 0) $$bindings.inputElement(inputElement);
	if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
	$$result.css.add(css);

	return ` <div tabindex="0" role="button" class="${escape(disableDefaultStyles ? '' : 'dropzone', true) + " " + escape(containerClasses, true) + " svelte-817dg2"}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", rootRef, 0)}><input${add_attribute("accept", accept?.toString(), 0)} ${multiple ? "multiple" : ""} ${required ? "required" : ""} type="file"${add_attribute("name", name, 0)} autocomplete="off" tabindex="-1" style="display: none;"> ${slots.default
	? slots.default({})
	: ` <p data-svelte-h="svelte-cb9g9j">Drag &#39;n&#39; drop some files here, or click to select files</p> `} </div>`;
});

/* D:/proyectos/chat-with-pdf/src/components/upload.svelte generated by Svelte v4.2.16 */

const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let files = { accepted: [], rejected: [] };

	return `${files.accepted.length === 0
	? `${validate_component(Dropzone, "Dropzone").$$render(
			$$result,
			{
				accept: "application/pdf",
				multiple: false
			},
			{},
			{
				default: () => {
					return `Arrastra y suelta aquí tu PDF`;
				}
			}
		)}`
	: ``} <ol>${each(files.accepted, item => {
		return `<li>${escape(item.name)}</li>`;
	})}</ol>`;
});

/* D:/proyectos/chat-with-pdf/src/components/loading.svelte generated by Svelte v4.2.16 */

const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="flex justify-center items-center flex-col gap-y-2">${validate_component(Spinner, "Spinner").$$render(
		$$result,
		{
			currentFill: "Black",
			currentColor: "White",
			size: 8,
			color: "purple"
		},
		{},
		{}
	)} <p class="text-xm font-bold" data-svelte-h="svelte-1mf0fbc">Se esta subiendo el archivo</p></div>`;
});

/* D:/proyectos/chat-with-pdf/src/components/chatting.svelte generated by Svelte v4.2.16 */

const Chatting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $appStatusInfo, $$unsubscribe_appStatusInfo;
	$$unsubscribe_appStatusInfo = subscribe(appStatusInfo, value => $appStatusInfo = value);
	const { url, pages, id } = $appStatusInfo;
	const numOfImagesToShow = Math.min(pages, 4);

	const images = Array.from({ length: numOfImagesToShow }, (_, i) => {
		const page = i + 1;
		return url.replace("/upload/", `/upload/w_400,h_540,c_fill,pg_${page}/`).replace(".pdf", ".jpg");
	});

	$$unsubscribe_appStatusInfo();

	return `<div class="grid grid-cols-4 gap-2">${each(images, image => {
		return `<img class="rounded w-full h-auto aspect-[400/540]"${add_attribute("src", image, 0)} alt="PDF page">`;
	})}</div> <form class="mt-8">${validate_component(Label, "Label").$$render($$result, { for: "question", class: "block mb-2" }, {}, {
		default: () => {
			return `Deja aquí tu pregunta`;
		}
	})} ${validate_component(Input, "Input").$$render(
		$$result,
		{
			id: "question",
			required: true,
			placeholder: "¿De qué trata este documento?"
		},
		{},
		{}
	)}</form> ${``} ${``}`;
});

/* D:/proyectos/chat-with-pdf/src/components/App.svelte generated by Svelte v4.2.16 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $appStatus, $$unsubscribe_appStatus;
	$$unsubscribe_appStatus = subscribe(appStatus, value => $appStatus = value);
	$$unsubscribe_appStatus();

	return `${$appStatus === APP_STATUS.INIT
	? `${validate_component(Upload, "Upload").$$render($$result, {}, {}, {})}`
	: `${$appStatus === APP_STATUS.LOADING
		? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`
		: `${$appStatus === APP_STATUS.CHATTING
			? `${validate_component(Chatting, "Chatting").$$render($$result, {}, {}, {})}`
			: `${$appStatus === APP_STATUS.ERROR
				? `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {
						default: () => {
							return `<span class="font-medium" data-svelte-h="svelte-16xn3xm">Error</span>
    Change a few things up and try submitting again.`;
						}
					})}`
				: `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {
						default: () => {
							return `<span class="font-medium" data-svelte-h="svelte-wxha0a">UNKOWN STATUS</span>
    This status is not recognized`;
						}
					})}`}`}`}`}`;
});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 top-0 z-[-2] h-full w-full bg-purple-800 bg-gradient-to-b from-purple-400 to-transparent"></div> <main class="grid place-content-center min-h-screen w-screen"> <h1 class="text-6xl font-bold text-center pb-10">CHAT WITH PDF</h1> <section class="container w-[1000px] max-w-xl h-64"> ${renderComponent($$result2, "App", App, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/proyectos/chat-with-pdf/src/components/App.svelte", "client:component-export": "default" })} </section> </main> ` })} `;
}, "D:/proyectos/chat-with-pdf/src/pages/index.astro", void 0);

const $$file = "D:/proyectos/chat-with-pdf/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
