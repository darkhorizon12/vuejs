<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Change Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-show="detailsAreVisible">
            <li><strong>Phone: {{ phoneNumber }}</strong></li>
            <li><strong>Email: {{ emailAddress }}</strong></li>
        </ul>
        <button @click="$emit('delete-friend', id)">Delete</button>
    </li>
</template>

<script>
export default {
    // props: [ 'name', 'phoneNumber', 'emailAddress', ],
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: ['toggle-favorite', 'delete-friend'],
    // emits: {
    //     'toggle-favorite': function(id) {
    //         if (id) {
    //             return true;
    //         }
    //         return false;
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        },
    },
};
</script>