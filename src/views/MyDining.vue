<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline">{{ dining }}</div>
          <v-list-item-title class="headline mb-1">
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <v-img :src="avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>

    <v-card class="my-4" outlined>
      <v-card-title>My Information</v-card-title>
      <v-card-text>
        <h3>Experience</h3>
        <p>{{ experience }}</p>
        <h3>Address</h3>
        <p>{{ address }}</p>
      </v-card-text>
    </v-card>

    <v-card class="my-4" outlined>
      <v-card-title>Current booked customers</v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="4"
            sm="3"
            v-for="customer in customers"
            :key="customer.name"
          >
            <v-card outlined>
              <v-card-text>
                {{ customer.name }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      avatar:
        "https://www.epicure.com.au/wp-content/uploads/2017/08/ben_swinbourne_resized.png",
      name: "Chef Name",
      description: "my description",
      dining: "My Dining",
      experience: "10 years",
      address: "Underground, Brisbane, Au",

      customers: [
        {
          name: "Customer Name1",
        },
        {
          name: "Customer Name2",
        },
        {
          name: "Customer Name3",
        },
        {
          name: "Customer Name4",
        },
      ],
    };
  },
};
</script>

<style></style>
