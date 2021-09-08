<template>
    <div class="loader"></div>
</template>

<script>
export default {
name: "loader"
}
</script>

<style scoped lang="scss">
.loader {
    text-align: center;
    border: 2px solid #fff;
    border-radius: 50%;
    border-top: 2px solid #333;
    width: 40px;
    height: 40px;
    -webkit-animation: spin 0.8s linear infinite; /* Safari */
    animation: spin 0.8s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}
</style>