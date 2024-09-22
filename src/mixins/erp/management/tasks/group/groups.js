export default {
    computed: {
        groups() {
            if (this.$store.getters['erp/management/tasks/group/getListResponse']) {
                return this.$store.getters['erp/management/tasks/group/getListResponse']['results'];
            } else return [];
        },
    },
    async created() {
        if (!this.groups.length > 0) {
            let params = { pageNumber: 1, rows: 1000000, name: "" };
            await this.$store.dispatch("erp/management/tasks/group/list", params)
        }
    },
}