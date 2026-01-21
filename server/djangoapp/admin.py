from django.contrib import admin
from .models import CarMake, CarModel


# Register your models here.
# Registering models with their respective admins
from django.contrib import admin
from .models import CarMake, CarModel

# Inline admin for CarModel inside CarMake
class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1  # Number of extra blank forms in the admin
    fields = ('name', 'type', 'year')  # Fields to show inline

# Admin for CarMake with CarModel inline
@admin.register(CarMake)
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')  # Show these fields in CarMake list
    inlines = [CarModelInline]              # Show associated CarModels inline

# Admin for CarModel separately
@admin.register(CarModel)
class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'year', 'car_make')  # Show fields including the make
    list_filter = ('car_make', 'type', 'year')           # Optional: add filters
    search_fields = ('name', 'car_make__name')           # Optional: add search

# CarModelInline class

# CarModelAdmin class

# CarMakeAdmin class with CarModelInline

# Register models here
