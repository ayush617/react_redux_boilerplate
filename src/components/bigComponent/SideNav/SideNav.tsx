import { ArrowDropDown, ArrowRight, MoreTimeRounded, SvgIconComponent } from "@mui/icons-material";
import { TreeItem, TreeView } from '@mui/lab';
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SideNav: React.FC = () => {

  return (
    <Box sx={{ pl: '20px' }}>
      <TreeView
        defaultCollapseIcon={<ArrowDropDown />}
        defaultExpandIcon={<ArrowRight />}
      >
        <AssideLink nodeId="1" to="/home" text="Home" Icon={MoreTimeRounded} />
      </TreeView>
    </Box>
  );
};


export default SideNav;

type assideLinkProps = {
  nodeId: string,
  to: string,
  text: string,
  Icon?: SvgIconComponent
}
const AssideLink: React.FC<assideLinkProps> = ({ nodeId, to, text, Icon }) => {
  const navigate = useNavigate();
  return (
    <TreeItem nodeId={nodeId} label={
      <Box sx={{ display: 'flex', alignItems: 'center', py: 1.25, mx: -1 }}>
        {Icon && <Icon sx={{ mr: 1 }} />} {text}
      </Box>
    } onClick={() => { navigate(to) }} sx={{ mt: 0.6, color: '#616161', ".MuiTreeItem-content.Mui-selected, .MuiTreeItem-content:hover": { borderRadius: '8px', color: '#5e35b1', fontWeight: 700 } }} />
  )
}