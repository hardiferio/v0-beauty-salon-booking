-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_path VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create financial records table
CREATE TABLE IF NOT EXISTS financial_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name VARCHAR(255) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  transaction_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
-- Password hash for 'admin123' using bcrypt (in production, use proper bcrypt hashing)
INSERT INTO admin_users (username, password_hash) 
VALUES ('admin', '$2a$10$YIjlrRc7lmlVlJR5YVR8K.Czvl9p5d6Xf8d9K5K5K5K5K5K5K5K5K')
ON CONFLICT (username) DO NOTHING;

-- Insert default services
INSERT INTO services (name, price, image_path) VALUES
('Potong Rambut', 35000, 'public/elegant-hair-salon-styling.jpg'),
('Facial Premium', 75000, 'public/luxury-facial-skincare-treatment.jpg'),
('Manicure', 45000, 'public/elegant-nail-art-manicure.jpg'),
('Massage Therapy', 100000, 'public/serene-spa-massage-therapy.jpg'),
('Makeup Pengantin', 300000, 'public/bridal-makeup-and-hair-styling.jpg'),
('Eyelash Extension', 150000, 'public/eyelash-extensions-beauty-treatment.jpg'),
('Sewa Kostum Pengantin', 250000, 'public/elegant-beauty-salon.png'),
('Sewa Kebaya', 150000, 'public/beautiful-hair-transformation-before-after.jpg'),
('Sewa Baju Karnaval', 100000, 'public/professional-indonesian-woman-hijab-portrait.png'),
('Sewa Baju Adat', 150000, 'public/skar-kedaton-circular-logo.png'),
('Sewa Jas', 120000, 'public/skar-kedaton-header-logo.png'),
('Sewa Baju Profesi', 100000, 'public/skar-kedaton-hero-logo.png')
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_records ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Allow read access to services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Allow read access to financial_records" ON financial_records
  FOR SELECT USING (true);
