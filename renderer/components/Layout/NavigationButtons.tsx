import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import { ButtonGroup, IconButton } from '@mui/material';

export default function NavigationButtons() {
  if (typeof window === 'undefined')
    return (
      <ButtonGroup>
        <IconButton color="inherit">
          <ArrowBackOutlined />
        </IconButton>
        <IconButton color="inherit">
          <ArrowForwardOutlined />
        </IconButton>
      </ButtonGroup>
    );

  return (
    <ButtonGroup>
      <IconButton
        color="inherit"
        onClick={() => window.history.back()}
        disabled={(window.history.state ?? 0) === 0}
      >
        <ArrowBackOutlined />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.history.forward()}
        disabled={(window.history.state ?? 0) < window.history.length}
      >
        <ArrowForwardOutlined />
      </IconButton>
    </ButtonGroup>
  );
}
