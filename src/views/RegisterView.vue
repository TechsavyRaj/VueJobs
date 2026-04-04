<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';
import { authState } from '@/state/auth';
import { useToast } from 'vue-toastification';

const router = useRouter();
const toast = useToast();

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
};

const handleRegister = async () => {
  if (!form.name || !form.email || !form.password || !form.confirmPassword) {
    toast.error('All fields are required');
    return;
  }

  if (!validateEmail(form.email)) {
    toast.error('Invalid email format');
    return;
  }

  if (!validatePassword(form.password)) {
    toast.error('Password must be at least 8 characters long, include an uppercase letter, and a number');
    return;
  }

  if (form.password !== form.confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }

  try {
    const res = await api.post('/api/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password
    });
    authState.login({ _id: res.data._id, name: res.data.name, email: res.data.email }, res.data.token);
    toast.success('Successfully registered and logged in!');
    router.push('/');
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.msg || 'Registration failed');
  }
};
</script>

<template>
  <section class="bg-green-50 min-h-screen pt-20">
    <div class="container m-auto max-w-md py-12">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleRegister">
          <h2 class="text-3xl text-center font-semibold mb-6">Register</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              v-model="form.name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter your name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              v-model="form.confirmPassword"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <p class="mt-4 text-center">
            Already have an account? <RouterLink to="/login" class="text-green-500 hover:text-green-700">Login</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
