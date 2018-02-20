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
            this.currentcount += 300;
        },
    }
}