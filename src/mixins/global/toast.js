export default {
  methods:{
    successToast(summary, details){
      let options = {
        severity: "success",
        summary: "Success",
        details: "Your action was successful!",
        icon: "pi-check-circle",
        life: 3000,
      }
      if(summary){
        options['summary'] = summary
      }
      if(details){
        options['details'] = details
      }
      this.$toast.add(options);
    },
    infoToast(summary, details){
      let options = {
        severity: "info",
        summary: "Information",
        details: "Here is some information for you.",
        icon: "pi-info-circle",
        life: 3000,
      }
      if(summary){
        options['summary'] = summary
      }
      if(details){
        options['details'] = details
      }
      this.$toast.add(options);
    },
    warnToast(summary, details){
      let options = {
        severity: "warn",
        summary: "Warning",
        details: "This could be a potential issue.",
        icon: "pi-exclamation-circle",
        life: 3000,
      }
      if(summary){
        options['summary'] = summary
      }
      if(details){
        options['details'] = details
      }
      this.$toast.add(options);
    },
    errorToast(summary, details){
      let options = {
        id:4,
        severity: "error",
        summary: "Error",
        details: "Something went wrong.",
        icon: "pi-times-circle",
        life: 3000,
      }
      if(summary){
        options['summary'] = summary
      }
      if(details){
        options['details'] = details
      }
      this.$toast.add(options);
    },
  }
}