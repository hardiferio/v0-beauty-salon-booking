-- Create tables for admin authentication and services management

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price BIGINT NOT NULL,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create financial_records table
CREATE TABLE IF NOT EXISTS financial_records (
  id BIGSERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  service TEXT NOT NULL,
  price BIGINT NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default admin user (username: admin, password: admin123)
INSERT INTO admin_users (username, password) VALUES ('admin', 'admin123')
ON CONFLICT (username) DO NOTHING;

-- Insert default services
INSERT INTO services (name, price, image) VALUES
  ('Potong Rambut', 35000, '/hair-cutting.jpg'),
  ('Facial Premium', 75000, '/facial-treatment.jpg'),
  ('Manicure', 45000, '/manicure.png'),
  ('Massage Therapy', 100000, '/relaxing-massage.png'),
  ('Makeup Pengantin', 300000, '/bridal-makeup.jpg'),
  ('Eyelash Extension', 150000, '/eyelash.jpg'),
  ('Sewa Kostum Pengantin', 250000, '/wedding-costume.jpg'),
  ('Sewa Kebaya', 150000, '/kebaya.jpg'),
  ('Sewa Baju Karnaval', 100000, '/carnival-costume.jpg'),
  ('Sewa Baju Adat', 150000, '/traditional-clothing.jpg'),
  ('Sewa Jas', 120000, '/suit-rental.jpg'),
  ('Sewa Baju Profesi', 100000, '/professional-uniform.jpg')
ON CONFLICT DO NOTHING;
