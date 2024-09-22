export default {
    computed: {
        statuses() {
            if (this.$store.getters['erp/management/tasks/status/getListResponse']) {
                return this.$store.getters['erp/management/tasks/status/getListResponse']['results'];
            } else return [];
        },
    },
    async created() {
        if (!this.statuses.length > 0) {
            let params = { pageNumber: 1, rows: 1000000, name: "" };
            await this.$store.dispatch("erp/management/tasks/status/list", params)
        }
    },
}