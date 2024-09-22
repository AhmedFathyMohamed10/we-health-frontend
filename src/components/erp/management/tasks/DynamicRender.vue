<template>
  <div>
    <span v-if="!isObject(value) && !Array.isArray(value)">
      {{ value }}
    </span>
    <span v-else>
      <span v-if="Array.isArray(value)">
        <!-- If the item is an array, render it as a table -->
        <table>
          <thead>
            <tr>
              <!-- Assuming the array items have consistent properties, using the first item's keys as table headers -->
              <th v-for="(subValue, subKey) in value[0]" :key="subKey">{{ subKey }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subItem, index) in value" :key="index">
              <!-- Loop over each property of the array items and render in table cells -->
              <td v-for="(subValue, subKey) in subItem" :key="subKey">
                <dynamic-render :value="subValue"></dynamic-render>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
      <span v-else-if="isObject(value)">
        <template v-if="Array.isArray(value)">
          <!-- If the value is an array, render it as a table -->
          <table>
            <thead>
              <tr>
                <!-- Assuming array items have consistent properties, using the first item's keys as table headers -->
                <th v-for="(subSubValue, subSubKey) in value[0]" :key="subSubKey">{{ subSubKey }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <!-- Loop over each property of the array items and render in table cells -->
                <td v-for="(subSubItem, subSubKey) in value" :key="subSubKey">
                  <dynamic-render :value="subSubItem"></dynamic-render>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <template v-else-if="isObject(value)">
          <!-- If the value is an object, render it as a table with one row for keys and another row for values -->
          <table>
            <thead>
              <tr>
                <th v-for="(subValue, subKey) in value" :key="subKey">
                  {{ subKey }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-for="(subValue, subKey) in value" :key="subKey">
                  <dynamic-render :value="subValue"></dynamic-render>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <template v-else>
          <!-- Display key and value for non-array and non-object values with line breaks -->
          <strong>{{ subKey }}:</strong> {{ subValue }}
        </template>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DynamicRender',
  props: {
    value: {
      type: [String, Object, Array],
      required: true,
    },
  },
  methods: {
    isObject(item) {
      return typeof item === 'object' && item !== null;
    },
  },
};
</script>
