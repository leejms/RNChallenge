/**
 * Redux Action Creators
 *
 * Normally actions would be broken down by functiona area and
 * the action types would be defined in a constants file, but
 * since this example is so small, I chose to go with less boilerplate
 */
export const toggleFollow = id => {
  return {type: 'TOGGLE_FOLLOW', id}
}