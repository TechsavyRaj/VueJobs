<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';
import { authState } from '@/state/auth';
import { useToast } from 'vue-toastification';

const router = useRouter();
const toast = useToast();

const form = reactive({
  email: '',
  password: '',
});

const handleLogin = async () => {
  try {
    const res = await api.post('/api/auth/login', form);
    authState.login({ _id: res.data._id, name: res.data.name, email: res.data.email }, res.data.token);
    toast.success('Logged in successfully!');
    router.push('/');
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.msg || 'Failed to login');
  }
};
</script>

<template>
  <section class="bg-green-50 min-h-screen pt-20">
    <div class="container m-auto max-w-md py-12">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleLogin">
          <h2 class="text-3xl text-center font-semibold mb-6">Login</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              v-model="form.email"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              v-model="form.password"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p class="mt-4 text-center">
            Don't have an account? <RouterLink to="/register" class="text-green-500 hover:text-green-700">Register</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
