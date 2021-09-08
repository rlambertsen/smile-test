<template>
    <div :class="[divClass ? divClass : 'grid-start']"
         ref="selectContainer"
    >
        <label :for="id"
               v-if="label"
               ref="label"
        >
            {{label}}
        </label>
        <select
            v-bind="$attrs"
            :id="id"
            @change="change"
            :class="selectClass ? selectClass : ''"
            ref="select"
            :multiple="multiple"
        >
            <option :value="undefined" v-if="!this.multiple">Select</option>
            <template v-if="typeof options[0] === 'string' && !objectKey">
                <option v-for="(option, index) in options"
                        :selected="option === value"
                        :value="option"
                        :key="index"
                        :index="index"
                >
                    {{option}}
                </option>
            </template>
            <template v-if="typeof options[0] === 'object' && objectKey">
                <option v-for="(option, index) in options"
                        :selected="option[objectKey] === value"
                        :value="option[objectKey]"
                        :key="index"
                        :index="index"
                >
                    <template v-if="labelKey">
                        {{option[labelKey]}}
                    </template>
                    <template v-else>
                        {{option[objectKey]}}
                    </template>
                </option>
            </template>
        </select>
    </div>
</template>

<script>
export default {
    name: "select-component",
    inheritAttrs: false,
    props: {
        /*
        * ID of select input
        * @type {String}
        */
        id: {
            type: String,
            default: ''
        },
        /*
        * label text
        * @type {String}
        */
        label: {
            type: String,
            default: ''
        },
        /*
        * value, if available on load
        * @type {String}
        */
        value: {
            type: [String, Boolean, Number, Array],
            default: ''
        },
        /*
        * options array to fill select input
        * @type {Array}
        */
        options: {
            type: Array,
            default: () => []
        },
        /*
        * space separated string of classes for select element
        * @type {String}
        */
        selectClass: {
            type: String,
            default: ''
        },
        /*
        * space separated string of classes for surrounding div
        * @type {String}
        */
        divClass: {
            type: String,
            default: ''
        },
        /*
        * required input?
        * @type {Boolean}
        */
        required: Boolean,
        /*
        * multiple select allowed?
        * @type {Boolean}
        */
        multiple: Boolean,
        /*
        * Object key to use when looping over custom options, this key should be present in the object
        * @type {String}
        */
        objectKey: {
            type: String,
            default: ''
        },
        /*
        * Object key to use when looping over custom options, this will be used to display text in the dropdown
        * @type {String}
        */
        labelKey: {
            type: String,
            default: ''
        },
    },
    methods: {
        /*
        * on change event fired by select element, if multiple returns array else returns value
        * @param {Event} event
        * @emits input
        */
        change(event) {
            if (this.multiple) {
                return this.$emit('input',  Array.from(event.target.options).filter(o => o.selected).map(o => ('_value' in o ? o._value : o.value)));
            }
            return this.$emit('input', event.target.value)
        }
    },
}
</script>

<style lang="scss" scoped>
.grid-start{
    display: -ms-grid;
    display: grid;
}
</style>