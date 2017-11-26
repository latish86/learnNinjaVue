<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h3>Form One - Contact Us</h3>
      <p>Fill this form to contact us</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="username" required>
      <label>Your message</label>
      <textarea></textarea>
    </div>
    <div slot="form-controls">
      <button @click="handleSubmit">Send</button>
    </div>
  </form-helper>
</div>
</template>

<script>
export default {
  data() {
  }
};
</script>

<style scoped>
</style>