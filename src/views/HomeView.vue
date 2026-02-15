<script setup>
import Content from "@/components/Content.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobLists from "@/components/JobLists.vue";
</script>
<template>
  <Content title="Intern Vue Developer" />
  <HomeCards/>
  <JobLists :limit="3" :showJobs="true"/>
</template>