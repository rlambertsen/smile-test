<template>
    <div>
        <label :for="id" v-if="label">{{label}}</label>

        <select
            v-bind="$attrs"
            :id="id"
            @change="change"
            :class="classes"
            ref="select"
        >
            <option :value="undefined" v-if="!$attrs.hasOwnProperty('multiple')">Select</option>
            <option
                v-for="(option, index) in options"
                :selected="option === value"
                :value="option"
                :key="index"
                :index="index"
            >
                {{option}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "multi-select-component",
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        value: {
            type: Array,
            default: () => []
        },
        options: {
            type: Array,
            default: () => []
        },
        classes: {
            type: String,
            default: ''
        },
        required: Boolean
    },
    methods: {
        change(event) {
            if (this.$attrs.hasOwnProperty('multiple')) {
                return this.$emit('input',  Array.from(event.target.options).filter(o => o.selected).map(o => ('_value' in o ? o._value : o.value)));
            }
            return this.$emit('input', event.target.value)
        }
    },
}
</script>