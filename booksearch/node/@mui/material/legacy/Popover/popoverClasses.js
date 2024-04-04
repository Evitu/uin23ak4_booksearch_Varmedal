import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
export function getPopoverUtilityClass(slot) {
  return generateUtilityClass('MuiPopover', slot);
}
var popoverClasses = generateUtilityClasses('MuiPopover', ['root', 'paper']);
export default popoverClasses;