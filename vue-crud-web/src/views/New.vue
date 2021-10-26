<template>
    <div>
        <h1>New</h1>
        <task-form @createOrUpdate="createOrUpdate"></task-form>
    </div>
</template>

<script>
import taskForm from "../components/TaskForm.vue";
import { api } from "../Helper/Helpers";

export default {
  name: "new-task",
  components: {
    "task-form": taskForm,
  },
  methods: {
    createOrUpdate: async function (task) {
      const res = await api.createtask(task);
      this.flash("task created", "success");
      this.$router.push(`/task/${res._id}`);
    },
  },
};
</script>
