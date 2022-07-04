import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: '7d010919-5a7b-4971-9509-4670ccf687a0',
    rating: 2,
    text: 'mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus',
    votes: 5,
  },
  {
    id: '7f19be3b-61f3-47ef-8fc3-33907d054985',
    rating: 9,
    text: 'suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet',
    votes: 2,
  },
  {
    id: '739ef758-6b38-4662-935d-a7dbd698d43e',
    rating: 10,
    text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim',
    votes: 3,
  }])