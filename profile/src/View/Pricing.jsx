import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/Pricing.css';

export default function Pricing() {
  React.useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.pricing-h4',
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-h4',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.pricing-h2',
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-h2',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.pricing-card',
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="pricing">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <h4 className="pricing-h4">Pricing Package</h4>
          <h2 className="pricing-h2">
            Amazing <span>Pricing</span> For Your Projects.
          </h2>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mt: 5,
            flexWrap: 'wrap',
          }}
        >
          {/* Basic Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="outlined"
            sx={{ minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined" color="neutral">
              BASIC
            </Chip>
            <Typography level="h2">Basic</Typography>
            {/* <Typography level="body-sm" sx={{ mt: 1, mb: 1 }}>₹4,999 / Project</Typography> */}
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>1 Fully Responsive Website</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Mobile-Friendly Layout</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Initial SEO Setup</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Contact Form Integration</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>1 Revision</ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
                Contact Us
              </Button>
            </CardActions>
          </Card>

          {/* Standard Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="solid"
            color="neutral"
            invertedColors
            sx={{ bgcolor: 'black', minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined">STANDARD</Chip>
            <Typography level="h2">Standard</Typography>
            {/* <Typography level="body-sm" sx={{ mt: 1, mb: 1 }}>₹9,999 / Project</Typography> */}
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Up to 3 Responsive Website Pages</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Mobile & Tablet Optimization</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Advanced SEO Setup</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>CMS or Blog Setup</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Social Media Integration</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>3 Revisions</ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Button endDecorator={<KeyboardArrowRight />}>Contact Us</Button>
            </CardActions>
          </Card>

          {/* Premium Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="outlined"
            sx={{ minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined" color="neutral">
              PREMIUM
            </Chip>
            <Typography level="h2">Premium</Typography>
            {/* <Typography level="body-sm" sx={{ mt: 1, mb: 1 }}>₹19,999+ / Project</Typography> */}
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Unlimited Pages / Projects</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Full Mobile & Desktop Optimization</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Full SEO Package with Analytics</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>E-commerce Integration</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Ongoing Support & Maintenance</ListItem>
              <ListItem><ListItemDecorator><Check /></ListItemDecorator>Unlimited Revisions</ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
