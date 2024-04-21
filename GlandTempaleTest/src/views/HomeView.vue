<template>
  <div>
    <div class="home-content">
      <span>
        <p class="header-text phone:text-2xl">
          Bảng điều khiển
        </p>
      </span>
      <div class="card">
        <Card>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span>
                <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" class="w-10 h-10 rounded-full">
              </span>
              <div class="ml-3">
                <h5 class="m-0">Chào</h5>
                <p class="m-0">G Nguyen</p>
              </div>
            </div>
            <span>
              <Button label="Đăng xuất" icon="pi pi-sign-out" class="p-button-secondary" @click="logout"/>
            </span>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ...
  methods: {
    logout() {
      this.$router.push('/');
    },
    // ...
  },
  // ...
};
</script>
  
  
  <style scoped>
  .p-button-secondary {
    background-color: #ffffff !important; /* Change this to your preferred gray color */
    border: 1px solid #d4d3d3 !important; /* Change this to your preferred gray color */
  }

  .p-button-secondary:hover {
    background-color: #f3f3f3 !important; /* Change this to your preferred gray color */
    border: 1px solid #d4d3d3 !important; /* Change this to your preferred gray color */
  }
  h5 {
    margin: 0;
  }
  .header-text{
    padding: 1rem;    
    color: #374151;
    font-size: 2rem;
    line-height: 2.25rem;
    font-weight: 600;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    .phone\:text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
    }
  }

  .w-10 {
  width: 2.5rem;
}

.gap-3 {
  gap: 1rem;
}

.h-10 {
  height: 2.5rem;
}

.rounded-full {
  border-radius: 9999px;
}
.flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .items-center {
    align-items: center;
  }
  </style>