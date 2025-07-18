import React from 'react';
import { 
  Typography, 
  Box,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from './sanity/imageUrl';

// Interface for blog content types
interface BlogBodyProps {
  content: any[];
}

// Styled components for blog content
const BlogContent = styled(Box)(({ theme }) => ({
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h1?.lineHeight,
  },
  '& h1': {
    fontSize: theme.typography.h1?.fontSize,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h2?.fontSize,
    },
  },
  '& h2': {
    fontSize: theme.typography.h2?.fontSize,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h3?.fontSize,
    },
  },
  '& h3': {
    fontSize: theme.typography.h3?.fontSize,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h4?.fontSize,
    },
  },
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: theme.typography.body1?.lineHeight,
    fontSize: theme.typography.body1?.fontSize,
    color: theme.palette.text.primary,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  '& li': {
    marginBottom: theme.spacing(1),
    lineHeight: 1.6,
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(3, 0),
    fontStyle: 'italic',
    backgroundColor: theme.palette.mode === 'dark' 
      ? theme.palette.grey[800] 
      : theme.palette.grey[200],
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },
  '& pre': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflow: 'auto',
    fontSize: theme.typography.body2?.fontSize,
    fontFamily: 'Monaco, "Lucida Console", monospace',
  },
  '& code': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? theme.palette.grey[700] 
      : theme.palette.grey[200],
    color: theme.palette.text.primary,
    padding: '2px 6px',
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.caption?.fontSize,
    fontFamily: 'Monaco, "Lucida Console", monospace',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[2],
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const BlogBody: React.FC<BlogBodyProps> = ({ content }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!content || !Array.isArray(content)) {
    return (
      <Typography variant="body1" color="text.secondary">
        No content available.
      </Typography>
    );
  }

  // Custom components for Portable Text
  const portableTextComponents = {
    block: {
      h1: ({ children }: any) => (
        <Typography variant="h1" component="h1" sx={{ 
          mt: 4, mb: 2, fontWeight: theme.typography.fontWeightBold, color: theme.palette.primary.main,
          fontSize: { xs: theme.typography.h2?.fontSize, md: theme.typography.h1?.fontSize }
        }}>
          {children}
        </Typography>
      ),
      h2: ({ children }: any) => (
        <Typography variant="h2" component="h2" sx={{ 
          mt: 4, mb: 2, fontWeight: theme.typography.fontWeightBold, color: theme.palette.primary.main,
          fontSize: { xs: theme.typography.h3?.fontSize, md: theme.typography.h2?.fontSize }
        }}>
          {children}
        </Typography>
      ),
      h3: ({ children }: any) => (
        <Typography variant="h3" component="h3" sx={{ 
          mt: 3, mb: 2, fontWeight: theme.typography.fontWeightBold,
          fontSize: { xs: theme.typography.h4?.fontSize, md: theme.typography.h3?.fontSize }
        }}>
          {children}
        </Typography>
      ),
      normal: ({ children }: any) => (
        <Typography variant="body1" component="p" sx={{ 
          mb: 2, lineHeight: theme.typography.body1?.lineHeight, fontSize: isMobile ? theme.typography.body2?.fontSize : theme.typography.body1?.fontSize,
          color: theme.palette.text.primary
        }}>
          {children}
        </Typography>
      ),
      blockquote: ({ children }: any) => (
        <Box component="blockquote" sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          paddingLeft: theme.spacing(2),
          margin: theme.spacing(3, 0),
          fontStyle: 'italic',
          backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.grey[800] 
            : theme.palette.grey[200],
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          '& .MuiTypography-root': {
            color: theme.palette.text.primary,
          }
        }}>
          <Typography variant="body1" sx={{ 
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium 
          }}>
            {children}
          </Typography>
        </Box>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <Box component="ul" sx={{ mb: 2, pl: 3 }}>
          {children}
        </Box>
      ),
      number: ({ children }: any) => (
        <Box component="ol" sx={{ mb: 2, pl: 3 }}>
          {children}
        </Box>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
          {children}
        </Box>
      ),
      number: ({ children }: any) => (
        <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
          {children}
        </Box>
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
      em: ({ children }: any) => <em>{children}</em>,
      code: ({ children }: any) => (
        <Box component="code" sx={{
          backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.grey[700] 
            : theme.palette.grey[200],
          color: theme.palette.text.primary,
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '0.9em',
          fontFamily: 'Monaco, "Lucida Console", monospace',
        }}>
          {children}
        </Box>
      ),
    },
    types: {
      image: ({ value }: any) => {
        // Debug: Log the image value to see what we're working with
        console.log('Image value in BlogBody:', value);
        
        // Use Sanity image URL builder for proper image rendering
        let imageUrl = '';
        
        if (value.asset) {
          try {
            const urlBuilder = imageUrlBuilder(value);
            imageUrl = urlBuilder.url();
          } catch (error) {
            console.error('Error building image URL:', error);
            imageUrl = value.asset.url || '';
          }
        } else {
          imageUrl = value.url || '';
        }
        
        console.log('Final image URL:', imageUrl);
        
        return (
          <Box sx={{ textAlign: 'center', my: 3 }}>
            <img 
              src={imageUrl} 
              alt={value.alt || 'Blog image'} 
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[2],
              }}
              onError={(e) => console.error('Image failed to load:', e.currentTarget.src)}
              onLoad={() => console.log('Image loaded successfully:', imageUrl)}
            />
            {value.caption && (
              <Typography variant="caption" sx={{ display: 'block', mt: 1, fontStyle: 'italic' }}>
                {value.caption}
              </Typography>
            )}
          </Box>
        );
      },
      code: ({ value }: any) => (
        <Box component="pre" sx={{ 
          backgroundColor: theme.palette.grey[900],
          color: theme.palette.common.white,
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          overflow: 'auto',
          fontSize: '0.9rem',
          fontFamily: 'Monaco, "Lucida Console", monospace',
          my: 2,
        }}>
          <code>{value.code}</code>
        </Box>
      ),
    },
  };

  return (
    <BlogContent sx={{ 
      maxWidth: '100%',
      fontSize: isMobile ? '1rem' : '1.1rem'
    }}>
      <PortableText 
        value={content} 
        components={portableTextComponents}
      />
    </BlogContent>
  );
};

export default BlogBody;