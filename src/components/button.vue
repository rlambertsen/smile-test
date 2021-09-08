<template>
    <button :class="[classes ? classes : '']"
            @click.prevent="$emit('click', $event)"
    >
        {{text}}
    </button>
</template>

<script>
export default {
    name: "basic-button",
    props: {
        /*
        * classes of btn
        * @type {String}
        */
        classes: {
            type: String,
            default: ''
        },
        /*
        * Readable text of btn
        * @type {String}
        */
        text:  {
            type: String,
            default: '',
            required: true
        },
    },
}
</script>

<style scoped lang="scss">
button{
    &:hover {
        background-color: darken(#fff, 5%);
    }
    background-color: #fff;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    box-shadow: none;
    display: inline-flex;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1;
    position: relative;
    vertical-align: top;
    border: solid 1px #dbdbdb;
    margin: 0 5px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s all;
}
@mixin button {
    border-color: #dbdbdb;
    border-width: 1px;
    color: #000;
    cursor: pointer;
    justify-content: center;
    padding: calc(.5em - 1px) 1em;
    text-align: center;
    white-space: nowrap;
}
$btnColors: (green: #48c774, red: #ff3860, yellow: #ffd531);
.button{
    @include button;
    @each $color-key, $color-value in $btnColors {
        &.#{$color-key} {
            &:hover {
                background-color: darken($color-value, 10%);
            }
            background-color: $color-value;
            color: #fff;
        }
    }
}




</style>