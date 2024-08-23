import React, { FC } from 'react';
import { Button, Box, Typography, TextField, Grid, Container, Avatar } from '@mui/material';

interface CheckoutFormProps {
  totalItems: number;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ totalItems }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // يمكنك إضافة منطق معالجة الدفع هنا
    console.log("Form submitted");
    alert('تم معالجة الدفع بنجاح. سوف يتم التواصل معك في أقرب وقت.');
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          width: 400, // عرض النموذج
          padding: 3, // تباعد داخلي
          border: '1px solid #ddd', // حدود خفيفة
          borderRadius: '8px', // زوايا مستديرة
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // تأثير ظل خفيف
          margin: 'auto', // توسيط النموذج
          backgroundColor: 'darkgray ',
        }}
      >
       <img
          src="https://cdn.dribbble.com/users/1102039/screenshots/7087636/media/33116a89d3e3f6989f3a0ec5de44fd51.gif"
          alt="Payment GIF"
          style={{
            width: 350,
            height: 200,
            margin: '0 auto 16px',
            borderRadius:20
            
          }}
        />
        <Typography variant="h6" component="div" gutterBottom
        sx={{fontSize:'meduim'}}>
          تفاصيل الدفع
        </Typography>

        <Typography variant="body1" component="div" gutterBottom 
        sx={{fontSize:'x-large'}}>
          عدد القطع: {totalItems}
        </Typography>

        <TextField
          label="رقم الهاتف"
          variant="outlined"
          type='tel'
          fullWidth
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#000000', // لون النص الغامق
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#000000', // لون النص الغامق عند التركيز
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // إخفاء الحدود الافتراضية
              },
              '&:before': {
                borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
              },
              '&:after': {
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
              },
              // تخصيص الألوان المختلفة للحواف العليا والسفلية
              '& .MuiOutlinedInput-notchedOutline': {
                borderTop: '2px solid black', // لون الحافة العليا
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية
                borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
              borderRight: 'none'
              },
            },
            fontSize: 'xx-large',
          }}
        />

        <TextField
          fullWidth
          label="رقم البطاقة"
          placeholder="4111 1111 1111 1111"
          required
          variant="outlined"
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#000000', // لون النص الغامق
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#000000', // لون النص الغامق عند التركيز
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // إخفاء الحدود الافتراضية
              },
              '&:before': {
                borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
              },
              '&:after': {
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
              },
              // تخصيص الألوان المختلفة للحواف العليا والسفلية
              '& .MuiOutlinedInput-notchedOutline': {
                borderTop: '2px solid black', // لون الحافة العليا
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية
                borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
              borderRight: 'none'
              },
            },
            fontSize: 'xx-large',
          }}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
           sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#000000', // لون النص الغامق
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#000000', // لون النص الغامق عند التركيز
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // إخفاء الحدود الافتراضية
              },
              '&:before': {
                borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
              },
              '&:after': {
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
              },
              // تخصيص الألوان المختلفة للحواف العليا والسفلية
              '& .MuiOutlinedInput-notchedOutline': {
                borderTop: '2px solid black', // لون الحافة العليا
                borderBottom: '2px solid #f5c518', // لون الحافة السفلية
                borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
              borderRight: 'none'
              },
            },
            fontSize: 'xx-large',
          }}
              fullWidth
              label="تاريخ انتهاء الصلاحية"
              placeholder="12/24"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': {
                color: '#000000', // لون النص الغامق
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#000000', // لون النص الغامق عند التركيز
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent', // إخفاء الحدود الافتراضية
                },
                '&:before': {
                  borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
                },
                '&:after': {
                  borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
                },
                // تخصيص الألوان المختلفة للحواف العليا والسفلية
                '& .MuiOutlinedInput-notchedOutline': {
                  borderTop: '2px solid black', // لون الحافة العليا
                  borderBottom: '2px solid #f5c518', // لون الحافة السفلية
                  borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
                borderRight: 'none'
                },
              },
              fontSize: 'xx-large',
            }}
              fullWidth
              label="اسم حامل البطاقة"
              placeholder="John Doe"
              required
              variant="outlined"
            />
            <TextField
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': {
                color: '#000000', // لون النص الغامق
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#000000', // لون النص الغامق عند التركيز
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent', // إخفاء الحدود الافتراضية
                },
                '&:before': {
                  borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
                },
                '&:after': {
                  borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
                },
                // تخصيص الألوان المختلفة للحواف العليا والسفلية
                '& .MuiOutlinedInput-notchedOutline': {
                  borderTop: '2px solid black', // لون الحافة العليا
                  borderBottom: '2px solid #f5c518', // لون الحافة السفلية
                  borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
                borderRight: 'none'
                },
              },
              fontSize: 'xx-large',
            }}
            
              fullWidth
              label="مكان الاقامة"
              placeholder="John Doe"
              required
              variant="outlined"
            />
          </Grid>
        </Grid>

        <TextField
         sx={{
          marginBottom: 2,
          '& .MuiInputLabel-root': {
            color: '#000000', // لون النص الغامق
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000000', // لون النص الغامق عند التركيز
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // إخفاء الحدود الافتراضية
            },
            '&:before': {
              borderBottom: '2px solid #FF5733', // لون الحافة السفلية (تحتاج لإضافة هذا التأثير)
            },
            '&:after': {
              borderBottom: '2px solid #f5c518', // لون الحافة السفلية عند التركيز
            },
            // تخصيص الألوان المختلفة للحواف العليا والسفلية
            '& .MuiOutlinedInput-notchedOutline': {
              borderTop: '2px solid black', // لون الحافة العليا
              borderBottom: '2px solid #f5c518', // لون الحافة السفلية
              borderLeft: 'none', // إزالة الحافة اليسرى عند التركيز
            borderRight: 'none'
            },
          },
          fontSize: 'xx-large',
        }}
          fullWidth
          label="المبلغ"
          placeholder="100.00"
          required
          variant="outlined"
        
        />

        <Button
          type="submit"
          sx={{ color: 'white', backgroundColor: '#0b3d91', fontSize: 'larger' }}
        >
          دفع
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutForm;
