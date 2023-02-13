<template>
    <form @submit.prevent="addNewFriend">
        <div>
            <label>NAME</label>
            <input type="text" v-model="userName">
        </div>
        <div>
            <label>PHONE</label>
            <input type="text" v-model="userPhone">
        </div>
        <div>
            <label>Email</label>
            <input type="text" v-model="userEmail">
        </div>
        <div>
            <button>Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-friend'],
    data() {
        return {
            userName: '',
            userPhone: '',
            userEmail: '',
        }
    },
    methods: {
        addNewFriend() {
            this.$emit('add-friend', this.userName, this.userPhone, this.userEmail);
        }
    }
};
</script>