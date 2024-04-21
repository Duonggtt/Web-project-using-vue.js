<template>
  <section class="login-section">
    <div class="card p-fluid">
      <h3 class="login-header" >Đăng nhập</h3>
      <form class="login-form">
        <div class="field grid">
          <InputText id="username" v-model="value" />
          <label for="username">Username</label>
        </div>
        <div class="field grid">
          <label for="password" class="col-12 mb-2 md:col-2 md:mb-0">Password</label>
          <div class="col-12 md:col-10">
            <input class="p-inputtext p-component" id="password" type="password" data-pc-name="inputtext" data-pc-section="root">
          </div>
        </div>
        <div class="field grid">
          <div class="col-12 md:col-10 md:offset-2">
            <button type="submit" class="p-button p-component">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>

.login-header {
  text-align: center;
  margin-bottom: 1em;

}
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.card {
  padding: 2em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  width: 100%;
}

.field {
  margin-bottom: 1em;
}

.p-button {
  width: 100%;
  padding: 1em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.p-button:hover {
  background-color: #0056b3;
}
</style>
  
  <script>
    import { ref } from 'vue';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Checkbox from 'primevue/checkbox';
    
    export default {
        components: {
        InputText,
        Password,
        Checkbox
        },
          setup() {
          const username = ref('');
          const password = ref('');
          const rememberMe = ref(false);
      
          const onSubmit = () => {
            this.$router.push('/');
          };
      
          return {
              username,
              password,
              rememberMe,
              onSubmit
          };
        }
    }
  </script>