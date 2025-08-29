<!-- Code for the About component -->

<template>
    <div id="about-us">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>{{  msg6  }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Script of the About component -->

<script>
export default {
    name:'about-us',
    data () {
        return {
            msg6: 'This is the About component'
        }
    }
}
</script>