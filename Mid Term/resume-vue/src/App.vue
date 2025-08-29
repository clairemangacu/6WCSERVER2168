<script>
export default {
  name: "Resume",
  data() {
    return {
      name: "Claire Mangacu",
      contact: {
        location: "Pampanga, Philippines",
        phone: "+63 965 732 5406",
        email: "clairemangacu@email.com",
        linkedin: "linkedin.com/in/mangacuclaire",
        github: "github.com/mangacuclaire"
      },
      background: [
        "Motivated web developer with experience in Vue.js, Node.js, and MongoDB.",
        "Passionate about building user-friendly applications.",
        "Strong problem-solving and teamwork skills."
      ],
      experience: [
        {
         
          details: [
            "Developed responsive UIs using Vue.js and Tailwind CSS",
            "Collaborated with backend team for API integrations",
            "Optimized app performance and reduced load time by 20%",
            "Built internal dashboards with Vue.js",
            "Assisted in debugging and testing applications"
          ]
        },
        {
          
          details: [
           
          ]
        }
      ],
      education: [
        "BS in Information Technology – Holy Angel University (2023 – Present)",
        "Dean’s Lister"
      ],
      skills: [
        "JavaScript", "Vue.js", "Node.js", "Express",
        "MongoDB", "Git", "REST API"
      ]
    };
  }
};
</script>

<template>
  <div class="resume">
    <!-- HEADER -->
    <header class="header">
      <img src="./assets/icon.png" alt="Profile image" class="profile-image" />
      <h1>{{ name }}</h1>
      <ul>
        <li>{{ contact.location }}</li>
        <li>{{ contact.phone }}</li>
        <li>{{ contact.email }}</li>
        <li><a :href="'https://' + contact.linkedin" target="_blank">LinkedIn</a></li>
        <li><a :href="'https://' + contact.github" target="_blank">GitHub</a></li>
      </ul>
    </header>

    <!-- SUMMARY -->
    <section class="background">
      <h2>Background</h2>
      <ul>
        <li v-for="(item, index) in background" :key="index">{{ item }}</li>
      </ul>
    </section>

    <!-- EXPERIENCE -->
    <section class="experience">
      <h2>Experience</h2>
      <div v-for="(job, index) in experience" :key="index" class="job">

        <small>{{ job.date }}</small>
        <ul>
          <li v-for="(detail, i) in job.details" :key="i">{{ detail }}</li>
        </ul>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="education">
      <h2>Education</h2>
      <ul>
        <li v-for="(edu, index) in education" :key="index">{{ edu }}</li>
      </ul>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.resume {
  max-width: 800px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #3e2723; /* dark mocha text */
  line-height: 1.6;
  padding: 2rem;
  background: #d7ccc8; /* mocha base background */
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #a1887f; /* mocha border */
}

.header {
  text-align: center;
  border-bottom: 2px solid #a1887f; /* mocha accent */
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.header h1 {
  margin: 0;
  font-size: 2rem;
  color: #4e342e; /* deep mocha heading */
}

.header ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.header li {
  margin: 0.2rem 0;
}

a {
  color: #6d4c41; /* medium mocha links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h2 {
  color: #4e342e; /* mocha section headings */
  border-bottom: 1px solid #a1887f;
  padding-bottom: 0.3rem;
  margin-top: 1.5rem;
}

.job {
  margin-bottom: 1rem;
}

ul {
  margin: 0.5rem 0 0 1.2rem;
  list-style-type: disc;
}

.skills ul {
  list-style-type: disc;
  columns: 2;
  padding-left: 1.5rem;
}
</style>


