<template>
  <project-summary :project="project" />
  <project-status :project="project" />
  <project-about :project="project" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectSummary from './ProjectSummary.vue';
import ProjectStatus from './ProjectStatus.vue';
import ProjectAbout from './ProjectAbout.vue';
import { Project } from '../models/project';

export default defineComponent({
  name: 'Project',
  components: { ProjectSummary, ProjectStatus, ProjectAbout },
  setup() {
    let project: Project = {
      name: 'Mastercraft Bamboo Monitor Riser',
      description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
      detail:
        'The Mastercraft Mamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
      bookmarked: true,
      currentAmount: 89914,
      targetAmount: 100000,
      numOfBuckers: 5007,
      daysLeft: 56,
    };

    return {
      project,
    };
  },
});
</script>
