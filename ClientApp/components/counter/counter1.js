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
            //should be 1
            this.currentcount += 1;
        },
    }
}