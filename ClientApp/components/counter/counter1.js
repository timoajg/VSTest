import Vue from 'vue';

export default {
    data: function () {
        return {
            currentcount: 0
        }
    },
    methods: {        
        incrementCounter: function ()
        {
            //New feature 2
            this.currentcount += 300;
        },
    }
}